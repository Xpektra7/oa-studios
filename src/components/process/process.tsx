import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import discoveryImg from "../../assets/images/process/discovery.webp?url";
import conceptImg from "../../assets/images/process/concept.webp?url";
import designImg from "../../assets/images/process/design.webp?url";
import constructionImg from "../../assets/images/process/construction.webp?url";
import handoffImg from "../../assets/images/process/handoff.webp?url";

export default function Process() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const processes = [
    {
      title: "Discovery",
      image: discoveryImg,
      description:
        "We listen before we draw.Every project begins with understanding — your vision, your constraints, your life.",
    },
    {
      title: "Concept",
      image: conceptImg,
      description:
        "From mood boards to initial sketches, we translate conversation into spatial language.",
    },
    {
      title: "Design Development",
      image: designImg,
      description:
        "Technical drawings, material selections, and 3D renders refine the concept into a buildable reality.",
    },
    {
      title: "Construction",
      image: constructionImg,
      description:
        "Our team remains on - site throughout the build — overseeing every contractor, every finish.",
    },
    {
      title: "Handover",
      image: handoffImg,
      description:
        "We walk you through every detail.Then we step back, and let you live in it.",
    },
  ];

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, (value) => {
    const snappedIndex = Math.round(value * (processes.length - 1));
    return `-${snappedIndex * 100}vw`;
  });

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative w-full bg-green text-cream"
      style={{ height: `${(processes.length - 1) * 100}dvh` }}
    >
      <div className="sticky top-0 h-dvh overflow-hidden ">
        <div className="absolute left-0 top-0 z-10 w-full space-y-8 px-8 pt-8 md:px-16">
          <h1 className="text-xl font-display font-bold tracking-widest">
            — HOW WE WORK
          </h1>
          <h1 className="text-4xl font-condensed font-bold">
            A process built for trust.
          </h1>
        </div>

        <motion.div
          id="panels"
          className="flex h-full w-[500vw] will-change-transform snap-x snap-mandatory"
          style={{ x }}
        >
          {processes.map((process, index) => (
            <article
              key={index}
              className="flex h-full w-screen shrink-0 snap-start flex-col justify-end gap-0 px-8 pb-16 pt-48 md:px-16"
            >
              <div className="relative h-64 w-full overflow-hidden bg-cream md:h-120">
                <img
                  src={process.image}
                  alt={process.title}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="grid gap-4 md:max-w-168">
                <h2 className="text-hero font-display leading-hero">{`0${index + 1}`}</h2>
                <h2 className="text-2xl font-display font-bold tracking-widest">
                  {process.title}
                </h2>
                <p className="max-w-128 text-sm font-body leading-7">
                  {process.description}
                </p>
              </div>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
