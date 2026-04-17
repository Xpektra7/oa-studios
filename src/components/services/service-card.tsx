import type { service } from "../../utils/types";
import { motion } from 'motion/react'

export default function ServiceCard({ service, index }: { service: service, index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="w-full"
    >
      <div className="w-full h-64 bg-bg-alt">
        <img
          src={service.image}
          alt={service.name}
          className="w-full h-full object-cover"
        />
      </div>
      <h2 className="text-3xl font-display font-bold text-cream mt-4">{service.name}</h2>
      <p className="font-body text-cream mt-2">{service.description}</p>
    </motion.div>
  )

}