import type { ReactNode } from 'react'
import './primitives.css'

/* ============================================================
   Переиспользуемые визуальные блоки для слайдов Nessy Pages
   ============================================================ */

/* --- Место под скриншот / скринкаст ------------------------ */
export function Shot({
  caption,
  label = 'Место под скриншот',
  tall = false,
}: {
  caption: string
  label?: string
  tall?: boolean
}) {
  return (
    <div className={'shot' + (tall ? ' shot--tall' : '')}>
      <div className="shot__icon">🖼</div>
      <div className="shot__label">{label}</div>
      <div className="shot__caption">{caption}</div>
    </div>
  )
}

/* --- Нумерованная повестка раздела -------------------------- */
export function AgendaList({ items }: { items: string[] }) {
  return (
    <div className="agenda">
      {items.map((label, i) => (
        <div key={i} className="agenda__item">
          <span className="agenda__num">{String(i + 1).padStart(2, '0')}</span>
          <span className="agenda__label">{label}</span>
        </div>
      ))}
    </div>
  )
}

/* --- Карточки ---------------------------------------------- */
export interface CardData {
  icon: string
  title: string
  text: string
  purple?: boolean
}

export function Cards({ items, cols = 3 }: { items: CardData[]; cols?: 2 | 3 }) {
  return (
    <div className={`cards cards--${cols}`}>
      {items.map((c, i) => (
        <div key={i} className={'card' + (c.purple ? ' card--purple' : '')}>
          <div className="card__icon">{c.icon}</div>
          <div className="card__title">{c.title}</div>
          <div className="card__text">{c.text}</div>
        </div>
      ))}
    </div>
  )
}

/* --- Чек-лист без буллетов ---------------------------------- */
export function Checklist({
  items,
  tone = 'accent',
}: {
  items: ReactNode[]
  tone?: 'accent' | 'purple'
}) {
  return (
    <div className="checklist">
      {items.map((it, i) => (
        <div key={i} className="checklist__item">
          <span className={'checklist__mark' + (tone === 'purple' ? ' checklist__mark--purple' : '')}>
            ✓
          </span>
          <span>{it}</span>
        </div>
      ))}
    </div>
  )
}

/* --- Ряд пилюль -------------------------------------------- */
export function PillRow({ items }: { items: { label: string; tone?: 'accent' | 'purple' }[] }) {
  return (
    <div className="pill-row">
      {items.map((p, i) => (
        <span key={i} className={'pill' + (p.tone ? ` pill--${p.tone}` : '')}>
          {p.label}
        </span>
      ))}
    </div>
  )
}
