import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import './slide.css'

interface SlideProps {
  children: ReactNode
  align?: 'center' | 'left'
  kicker?: ReactNode
}

// Общая обёртка слайда: единые отступы, фон и «ступенчатая» анимация детей.
export default function Slide({ children, align = 'center', kicker }: SlideProps) {
  return (
    <section className={`slide slide--${align}`}>
      {kicker && <div className="slide__kicker">{kicker}</div>}
      <motion.div
        className="slide__body"
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
        }}
      >
        {children}
      </motion.div>
    </section>
  )
}

interface RevealProps {
  children: ReactNode
  className?: string
}

// Анимированный элемент внутри слайда — появляется по очереди.
export function Reveal({ children, className }: RevealProps) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 18 },
        show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
      }}
    >
      {children}
    </motion.div>
  )
}
