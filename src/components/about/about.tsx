import { useRef } from 'react';
import './about.css'
import { useScroll, useTransform, motion, type MotionStyle } from 'motion/react'

export default function About() {

  const container = useRef(null);

  const { scrollYProgress } = useScroll(
    {
      target: container,
      offset: ["start end", "end end"]
    });
  const rotate = useTransform(scrollYProgress, [0, 1], [-8, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <motion.section ref={container} id="about" className="sticky h-dvh top-0 w-screen bg-cream p-8 space-y-8" style={{ rotate, scale }}>
      <h1 className="text-5xl font-italic font-bold text-bg">About</h1>
      <p className="font-body text-bg-alt max-w-3xl">OA Studios is a Lagos-based architectural practice working at
        the intersection of form, function, and feeling. We don't just
        design buildings — we shape the way people move through the world.

        From the first sketch to the final finish, every decision is
        deliberate, every detail considered.
      </p>
    </motion.section>
  )
}