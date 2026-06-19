import { motion, useMotionValue } from "motion/react";
import React, { useEffect } from "react";
import "./services.css";
import archImg from "../../assets/images/services/architecture.webp?url";
import intImg from "../../assets/images/services/interior.webp?url";
import extImg from "../../assets/images/services/exterior.webp?url";
import consultImg from "../../assets/images/services/consultation.webp?url";
import ServiceCard from "./service-card";
import type { service } from "../../utils/types";

export default function Services() {
  const services: service[] = [
    {
      name: "Architecture Design",
      image: archImg,
      tag: "architecture",
      description: "Structures designed to outlast trends.",
    },
    {
      name: "Interior Design",
      image: intImg,
      tag: "interior",
      description: "Spaces that feel personal before designed.",
    },
    {
      name: "Exterior Design",
      image: extImg,
      tag: "exterior",
      description: "Form that converses with its environment.",
    },
    {
      name: "Consultation Services",
      image: consultImg,
      tag: "consultation",
      description: "Clarity at every stage of the process.",
    },
  ];

  const isDesktop = window.innerWidth >= 1024;

  function useMouse() {
    const mouse = {
      x: useMotionValue(0),
      y: useMotionValue(0),
    };

    const mousemove = (e: MouseEvent) => {
      const { x, y } = e;
      mouse.x.set(x);
      mouse.y.set(y);
    };

    useEffect(() => {
      if (!isDesktop) return;
      const el = document.getElementById("services");
      el?.addEventListener("mousemove", mousemove);
      return () => el?.removeEventListener("mousemove", mousemove);
    }, []);

    return mouse;
  }

  const rawMouse = useMouse();
  const smoothMouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const lerp = (start: number, end: number, factor: number): number =>
    start * (1 - factor) + end * factor;

  useEffect(() => {
    if (!isDesktop) return;
    let rafId: number;
    const updateSmooth = () => {
      const rawX = rawMouse.x.get();
      const rawY = rawMouse.y.get();
      const smoothX = smoothMouse.x.get();
      const smoothY = smoothMouse.y.get();

      if (Math.abs(rawX - smoothX) > 0.1 || Math.abs(rawY - smoothY) > 0.1) {
        smoothMouse.x.set(lerp(smoothX, rawX, 0.1));
        smoothMouse.y.set(lerp(smoothY, rawY, 0.1));
      }
      rafId = requestAnimationFrame(updateSmooth);
    };
    rafId = requestAnimationFrame(updateSmooth);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <section
      id="services"
      className="relative min-h-dvh w-screen bg-bg p-8 flex items-center justify-center py-16 lg:py-0"
      style={
        {
          "--interior": `url(${intImg})`,
          "--consultation": `url(${consultImg})`,
          "--exterior": `url(${extImg})`,
          "--architecture": `url(${archImg})`,
        } as React.CSSProperties
      }
    >
      {/* // Large Screen */}
      <div
        id="services-container"
        className="hidden lg:flex lg:flex-col items-center justify-center max-w-4xl text-center p-1"
      >
        {services.map((service) => (
          <div
            className="text-4xl font-display font-semibold text-cream leading-20 service"
            key={service.tag}
            id={service.tag}
          >
            <h1 className="inline">{service.name}</h1>
            <motion.div
              id="scope"
              className="w-0 h-0 -rotate-5 top-0 left-0 absolute"
              style={{ x: smoothMouse.x, y: smoothMouse.y }}
            >
              {services.map((service) => (
                <div
                  key={service.name}
                  className={`scope-bg bg-cream! absolute w-full h-full hidden`}
                ></div>
              ))}
            </motion.div>
          </div>
        ))}
        <motion.div
          id="cursor"
          className="-rotate-5 top-0 left-0 absolute bg-cream p-2 px-4"
          style={{ x: smoothMouse.x, y: smoothMouse.y }}
        >
          <h1 className="text-2xl font-display font-bold text-bg">
            — WHAT WE DO
          </h1>
        </motion.div>
      </div>

      {/* // Small Screens */}
      <div className="flex flex-col w-full py-16 gap-16 lg:hidden">
        <div className="space-y-8">
          <h1 className="text-2xl font-display font-bold text-cream tracking-widest">
            — WHAT WE DO
          </h1>
          <h1 className="text-5xl font-condensed font-bold text-cream">
            Ways we bring your vision to life.
          </h1>
        </div>

        {services.map((service, index) => (
          <ServiceCard key={service.name} service={service} index={index} />
        ))}
      </div>
    </section>
  );
}
