import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import type { Testimonial } from "../../utils/types";

const testimonials: Testimonial[] = [
  {
    name: "Adebayo Ogunlesi",
    title: "Founder, Tribeca Development",
    quote:
      "OA Studios didn't just design our headquarters — they reimagined how our team interacts with space. The result is a building that breathes with our culture.",
  },
  {
    name: "Chioma Eze",
    title: "Principal, Eze Interiors",
    quote:
      "Their ability to blend structure with soul is rare. Every corner tells a story, every material has intent. Working with them changed how I think about architecture.",
  },
  {
    name: "Tunde Balogun",
    title: "CEO, Balogun Group",
    quote:
      "From concept to handover, OA Studios brought a level of precision and care that exceeded every expectation. Our flagship building stands as a testament to their craft.",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () =>
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const t = testimonials[current];

  return (
    <section className="relative w-screen bg-cream">
      <div className="container-oa min-h-[60dvh] grid grid-cols-1 lg:grid-cols-[3fr_7fr] gap-12 lg:gap-16 items-center py-24 lg:py-32">
        {/* Left: Attribution */}
        <div className="flex flex-col gap-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="space-y-2"
            >
              <h3 className="font-body font-bold text-bg">{t.name}</h3>
              <p className="font-body text-bg-alt text-sm">{t.title}</p>
            </motion.div>
          </AnimatePresence>

          <div className="flex gap-2">
            <button
              onClick={prev}
              className="size-8 rounded-full flex items-center justify-center text-bg bg-cream-dark hover:bg-cream-dark/70 transition-colors duration-300 cursor-pointer"
              aria-label="Previous testimonial"
            >
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                <path
                  d="M10 4L6 8L10 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              onClick={next}
              className="size-8 rounded-full flex items-center justify-center text-bg bg-cream-dark hover:bg-cream-dark/70 transition-colors duration-300 cursor-pointer"
              aria-label="Next testimonial"
            >
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                <path
                  d="M6 4L10 8L6 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Right: Quote */}
        <div className="relative flex flex-col md:flex-row gap-0 justify-center">
          <span
            className="text-8xl max-h-12 md:-translate-y-6 font-body text-bg leading-none select-none pointer-events-none"
            aria-hidden="true"
          >
            &ldquo;
          </span>
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={current}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <p className="font-display text-3xl lg:text-4xl text-bg tracking-normal leading-snug relative z-10">
                {t.quote}
              </p>
            </motion.blockquote>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
