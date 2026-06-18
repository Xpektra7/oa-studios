import { motion } from "motion/react";
import article01Img from "../../assets/images/journal/article-01.webp?url";
import article02Img from "../../assets/images/journal/article-02.webp?url";
import article03Img from "../../assets/images/journal/article-03.webp?url";

const articles = [
  {
    date: "June 12, 2026",
    title: "Why Materiality Shapes the Way We Experience Space",
    summary:
      "The materials we choose do more than define a building's aesthetic — they shape how inhabitants feel, move, and interact. From the warmth of untreated wood to the precision of polished concrete, every surface tells a story.",
    image: article01Img,
  },
  {
    date: "May 28, 2026",
    title: "A Conversation on Lagos Urbanism",
    summary:
      "As one of Africa's fastest-growing cities, Lagos presents unique challenges and opportunities for architects. We sit down with local urban planners to discuss density, infrastructure, and the future of Nigerian cities.",
    image: article02Img,
  },
  {
    date: "April 15, 2026",
    title: "Designing for the Tropical Climate",
    summary:
      "Architecture in the tropics demands a fundamentally different approach. Passive cooling, cross-ventilation, and deep overhangs aren't just aesthetic choices — they're responses to an environment that shapes how we live.",
    image: article03Img,
  },
];

export default function Journal() {
  return (
    <section className="relative w-screen bg-cream">
      <div className="container-oa py-24 lg:py-32">
        {/* Header */}
        <div className="mb-16 lg:mb-20">
          <p className="font-condensed text-2xs tracking-widest-oa text-bg-alt uppercase mb-4">
            — Our Journal
          </p>
          <h2 className="font-display font-bold text-4xl lg:text-5xl xl:text-6xl text-bg leading-tight-oa max-w-4xl">
            Ideas worth sitting with.
          </h2>
        </div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          {articles.map((article, index) => (
            <motion.article
              key={index}
              className="group flex flex-col"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.6,
                    ease: [0.25, 0.1, 0.25, 1],
                  },
                },
              }}
            >
              {/* Image */}
              <div className="overflow-hidden aspect-4/3 w-full mb-5">
                <img
                  src={article.image}
                  alt={article.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-[1.03]"
                />
              </div>

              {/* Date */}
              <p className="font-body text-xs text-bg-alt/70 mb-3">
                {article.date}
              </p>

              {/* Title */}
              <h3 className="font-body font-semibold text-lg text-bg mb-3 ">
                {article.title}
              </h3>

              {/* Summary */}
              <p className="font-body text-sm text-bg-alt leading-normal line-clamp-4">
                {article.summary}
              </p>

              {/* Bottom border */}
              <div className="mt-auto pt-6 border-b border-bg/15 group-hover:border-bg/40 transition-colors duration-300" />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
