import { useRef, useState } from 'react'
import { useInView, useMotionValue, useSpring, motion } from 'motion/react'

interface StatCounterProps {
  target: number
  suffix?: string
  label: string
}

export default function StatCounter({ target, suffix = '', label }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const [displayValue, setDisplayValue] = useState(0)

  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { damping: 30, stiffness: 50 })

  if (isInView && displayValue === 0) {
    motionValue.set(target)
    springValue.on('change', (latest) => {
      setDisplayValue(Math.round(latest))
    })
  }

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center"
      style={{ borderTop: '1px solid var(--color-border)', paddingTop: '0.5rem' }}
    >
      <span className="text-4xl font-condensed font-bold text-bg">
        {displayValue}{suffix}
      </span>
      <span className="text-base text-center font-body text-bg-alt mt-2">{label}</span>
    </motion.div>
  )
}