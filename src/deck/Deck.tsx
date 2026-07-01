import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import type { SlideEntry } from './types'
import { useFullscreen } from './useFullscreen'
import './deck.css'

interface DeckProps {
  slides: SlideEntry[]
}

const variants = {
  enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 80 : -80 }),
  center: { opacity: 1, x: 0 },
  exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -80 : 80 }),
}

export default function Deck({ slides }: DeckProps) {
  const [[index, dir], setState] = useState<[number, number]>([0, 0])
  const { toggle } = useFullscreen()

  const go = useCallback(
    (next: number) => {
      setState(([cur]) => {
        const clamped = Math.max(0, Math.min(slides.length - 1, next))
        return [clamped, clamped > cur ? 1 : -1]
      })
    },
    [slides.length],
  )

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault()
        setState(([cur]) => [Math.min(slides.length - 1, cur + 1), 1])
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault()
        setState(([cur]) => [Math.max(0, cur - 1), -1])
      } else if (e.key === 'Home') {
        setState([0, -1])
      } else if (e.key === 'End') {
        setState([slides.length - 1, 1])
      } else if (e.key === 'f' || e.key === 'F') {
        void toggle()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [slides.length, toggle])

  const Current = slides[index].component

  return (
    <div className="deck">
      <AnimatePresence mode="wait" custom={dir}>
        <motion.div
          key={index}
          className="deck__slide"
          custom={dir}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <Current />
        </motion.div>
      </AnimatePresence>

      <div className="deck__progress">
        {slides.map((s, i) => (
          <button
            key={s.id}
            className={'deck__dot' + (i === index ? ' is-active' : '')}
            aria-label={`Слайд ${i + 1}`}
            onClick={() => go(i)}
          />
        ))}
      </div>

      <div className="deck__counter">
        {index + 1} / {slides.length}
      </div>
    </div>
  )
}
