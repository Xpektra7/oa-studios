import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

function inlineCssPlugin(): Plugin {
  return {
    name: "inline-css",
    enforce: "post",
    apply: "build",
    closeBundle() {
      const dist = resolve("dist");
      const htmlPath = resolve(dist, "index.html");

      let html = readFileSync(htmlPath, "utf-8");
      const match = html.match(
        /<link rel="stylesheet" crossorigin href="(\/assets\/index-[^.]+\.css)">/
      );
      if (!match) return;

      const css = readFileSync(resolve(dist, match[1].slice(1)), "utf-8");
      html = html.replace(match[0], `<style>${css}</style>`);
      writeFileSync(htmlPath, html);
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), inlineCssPlugin()],
});
