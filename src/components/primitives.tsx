import type { ReactNode } from 'react'
import './primitives.css'

/* ============================================================
   Переиспользуемые визуальные блоки для слайдов Nessy Pages
   ============================================================ */

/* --- Окно редактора контента ------------------------------- */
export function EditorFrame({
  tab = 'Редактор контента',
  agentGhost = false,
  pulsing = false,
  children,
}: {
  tab?: string
  agentGhost?: boolean
  pulsing?: boolean
  children: ReactNode
}) {
  return (
    <div className="frame">
      <div className="frame__bar">
        <div className="frame__dots">
          <span />
          <span />
          <span />
        </div>
        <div className="frame__tab">{tab}</div>
        <div className="frame__spacer" />
        <button
          className={
            'agent-btn' + (agentGhost ? ' agent-btn--ghost' : '') + (pulsing ? ' is-pulsing' : '')
          }
        >
          ✦ Nessy Pages
        </button>
      </div>
      <div className="frame__body">{children}</div>
    </div>
  )
}

/* Заглушка «страницы» внутри редактора */
export function CanvasSkeleton() {
  return (
    <div className="frame__canvas">
      <div className="skeleton skeleton--title" />
      <div className="skeleton skeleton--line skeleton--w80" />
      <div className="skeleton skeleton--line skeleton--w60" />
      <div className="skeleton skeleton--block" />
      <div className="skeleton skeleton--line skeleton--w70" />
      <div className="skeleton skeleton--block" />
    </div>
  )
}

/* --- Панель / окно чата с агентом --------------------------- */
export interface ChatMessage {
  from: 'user' | 'agent'
  text: ReactNode
}

export function ChatPanel({
  messages,
  chips,
  standalone = false,
  placeholder = 'Напишите агенту…',
}: {
  messages: ChatMessage[]
  chips?: string[]
  standalone?: boolean
  placeholder?: string
}) {
  return (
    <div className={'chat' + (standalone ? ' chat--standalone' : '')}>
      <div className="chat__head">
        <span className="chat__avatar">✦</span>
        Nessy Pages
      </div>
      <div className="chat__stream">
        {messages.map((m, i) => (
          <div key={i} className={`bubble bubble--${m.from}`}>
            {m.text}
          </div>
        ))}
      </div>
      <div className="chat__composer">
        {chips && chips.length > 0 && (
          <div className="chat__chips">
            {chips.map((c, i) => (
              <span key={i} className={'chip' + (i === 0 ? ' chip--accent' : '')}>
                {c}
              </span>
            ))}
          </div>
        )}
        <div className="chat__input">
          {placeholder}
          <span className="chat__send">↑</span>
        </div>
      </div>
    </div>
  )
}

/* --- Дерево блоков с подсветкой ----------------------------- */
export interface TreeRow {
  label: string
  icon?: string
  depth?: 0 | 1 | 2
  changed?: boolean
}

export function BlockTree({ rows, toggle = true }: { rows: TreeRow[]; toggle?: boolean }) {
  return (
    <div className="tree">
      <div className="tree__head">
        <span>Дерево блоков</span>
        {toggle && <span className="tree__toggle">◈ Изменённые агентом</span>}
      </div>
      <div className="tree__rows">
        {rows.map((r, i) => (
          <div
            key={i}
            className={'tree__row' + (r.changed ? ' is-changed' : '')}
            data-depth={r.depth ?? 0}
          >
            <span className="ico">{r.icon ?? '▧'}</span>
            {r.label}
          </div>
        ))}
      </div>
    </div>
  )
}

/* --- Слот под живое демо / скринкаст ------------------------ */
export function DemoSlot({ label, caption }: { label: string; caption?: string }) {
  return (
    <div className="demo-slot">
      <div className="demo-slot__play">▶</div>
      <div className="demo-slot__hint">Живое демо · скринкаст</div>
      <div className="demo-slot__label">{label}</div>
      {caption && <div className="demo-slot__caption">{caption}</div>}
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

/* --- Поток шагов (сценарии миграции) ------------------------ */
export interface FlowStep {
  title: string
  text: string
  tag?: string
  tone?: 'auto' | 'approve' | 'fix'
}

export function Flow({ steps }: { steps: FlowStep[] }) {
  return (
    <div className="flow">
      {steps.map((s, i) => (
        <div key={i} className="flow__step">
          <div className="flow__num">{i + 1}</div>
          {s.tag && <span className={`flow__tag flow__tag--${s.tone ?? 'auto'}`}>{s.tag}</span>}
          <div className="flow__title">{s.title}</div>
          <div className="flow__text">{s.text}</div>
        </div>
      ))}
    </div>
  )
}

/* --- Нумерованная повестка раздела -------------------------- */
export interface AgendaRow {
  label: string
  desc?: string
}

export function AgendaList({ items }: { items: AgendaRow[] }) {
  return (
    <div className="agenda">
      {items.map((it, i) => (
        <div key={i} className="agenda__item">
          <span className="agenda__num">{String(i + 1).padStart(2, '0')}</span>
          <span className="agenda__label">{it.label}</span>
          {it.desc && <span className="agenda__desc">{it.desc}</span>}
        </div>
      ))}
    </div>
  )
}

/* --- Обложка раздела (большой номер) ------------------------ */
export function SectionCover({ num, title }: { num: string; title: string }) {
  return (
    <div className="section-cover">
      <div className="section-cover__num">{num}</div>
      <div className="section-cover__title">{title}</div>
    </div>
  )
}

/* --- Чек-лист без буллетов ---------------------------------- */
export function Checklist({ items }: { items: ReactNode[] }) {
  return (
    <div className="checklist">
      {items.map((it, i) => (
        <div key={i} className="checklist__item">
          <span className="checklist__mark">✓</span>
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

/* --- Маппинг полей (до → после) ----------------------------- */
export function Mapping({
  from,
  to,
}: {
  from: { cap: string; fields: string[] }
  to: { cap: string; fields: string[] }
}) {
  return (
    <div className="mapping">
      <div className="mapping__col">
        <div className="mapping__cap">{from.cap}</div>
        {from.fields.map((f, i) => (
          <div key={i} className="mapping__field">
            {f}
          </div>
        ))}
      </div>
      <div className="mapping__arrow">→</div>
      <div className="mapping__col mapping__col--new">
        <div className="mapping__cap">{to.cap}</div>
        {to.fields.map((f, i) => (
          <div key={i} className="mapping__field">
            {f}
          </div>
        ))}
      </div>
    </div>
  )
}
