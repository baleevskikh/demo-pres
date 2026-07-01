import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import './MediaFigure.css'

interface MediaFigureProps {
  /** URL картинки */
  src?: string
  /** URL видео (взаимоисключимо с src) */
  video?: string
  alt?: string
  caption?: string
  /** Вписывать по высоте (для вертикальных/мелких скриншотов) */
  fit?: boolean
}

// Клавиши, которыми листается дека. Пока открыт лайтбокс — гасим их,
// чтобы слайд под оверлеем не переключался.
const DECK_KEYS = ['ArrowLeft', 'ArrowRight', ' ', 'PageUp', 'PageDown', 'Home', 'End']

export default function MediaFigure({ src, video, alt = '', caption, fit = false }: MediaFigureProps) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        return
      }
      // Гасим навигацию деки в фазе capture, пока открыт лайтбокс.
      if (DECK_KEYS.includes(e.key)) {
        e.preventDefault()
        e.stopPropagation()
      }
    }
    window.addEventListener('keydown', onKey, true)
    return () => window.removeEventListener('keydown', onKey, true)
  }, [open])

  const isVideo = Boolean(video)

  return (
    <>
      <figure
        className={'figure' + (fit ? ' figure--fit' : '')}
        onClick={() => setOpen(true)}
        role="button"
        tabIndex={0}
        aria-label={caption || alt || 'Открыть на весь экран'}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            setOpen(true)
          }
        }}
      >
        <div className="figure__frame">
          {isVideo ? (
            // #t=0.5 — показать кадр-превью, не проигрывая видео в слайде
            <video src={`${video}#t=0.5`} muted playsInline preload="metadata" />
          ) : (
            <img src={src} alt={alt} loading="lazy" />
          )}
          {isVideo && (
            <span className="figure__play" aria-hidden>
              ▶
            </span>
          )}
          <span className="figure__zoom" aria-hidden>
            ⤢
          </span>
        </div>
        {caption && <figcaption>{caption}</figcaption>}
      </figure>

      {createPortal(
        <AnimatePresence>
          {open && (
            <motion.div
              className="lightbox"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <button className="lightbox__close" aria-label="Закрыть" onClick={() => setOpen(false)}>
                ✕
              </button>
              <motion.div
                className="lightbox__stage"
                initial={{ scale: 0.94, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.96, opacity: 0 }}
                transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                // Клик по самому медиа не должен закрывать (только видео-контролы);
                // но пользователь просил «вернуть по клику» — поэтому оставляем закрытие
                // по клику на фон и по кнопке/Esc, а по видео клики не глушим для контролов.
                onClick={(e) => {
                  if (isVideo) e.stopPropagation()
                }}
              >
                {isVideo ? (
                  <video src={video} controls autoPlay loop playsInline />
                ) : (
                  <img src={src} alt={alt} />
                )}
              </motion.div>
              <div className="lightbox__hint">Клик по фону или Esc — закрыть</div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body,
      )}
    </>
  )
}
