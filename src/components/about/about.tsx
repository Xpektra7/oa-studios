import { useRef } from "react";
import "./about.css";
import { useScroll, useTransform, motion } from "motion/react";
import StatCounter from "./stat-counter";

export default function About() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [-8, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <motion.section
      ref={containerRef}
      id="about"
      className="relative min-h-dvh top-0 w-screen bg-cream p-16 px-8 md:px-16"
      style={{ rotate, scale }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-1 gap-16 w-full">
        <div className="space-y-8 col-span-1">
          <h1 className="text-2xl font-display font-bold text-bg tracking-widest">
            — WHO WE ARE
          </h1>
          <h1 className="text-5xl font-condensed font-bold text-bg">
            We build the spaces between ambition and reality.
          </h1>

          <p className="font-body text-bg-alt max-w-[60ch]">
            OA Studios is a Lagos-based architectural practice working at the
            intersection of form, function, and feeling. We don't just design
            buildings — we shape the way people move through the world. From the
            first sketch to the final finish, every decision is deliberate,
            every detail considered.
          </p>
          <p className="font-body text-bg-alt max-w-[60ch]">
            From the first sketch to the final finish, every decision is
            deliberate, every detail considered.
          </p>
          <div className="flex gap-8 mt-16 pt-8 justify-between max-w-[60ch] border-t border-bg-alt">
            <StatCounter target={6} suffix="+" label="Years Experience" />
            <StatCounter target={80} suffix="+" label="Projects Completed" />
            <StatCounter target={7} suffix="" label="Awards Won" />
          </div>
        </div>
        <div
          className="col-span-1 w-full lg:w-3/4 mx-auto h-96 lg:h-full"
          id="about-img"
        ></div>
        <div className="block w-full h-24 bg-cream lg:hidden"></div>
      </div>
    </motion.section>
  );
}
