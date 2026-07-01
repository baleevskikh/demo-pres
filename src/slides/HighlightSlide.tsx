import Slide, { Reveal } from '../deck/Slide'
import { BlockTree, Checklist } from '../components/primitives'

export default function HighlightSlide() {
  return (
    <Slide align="left" kicker="2.3 · Подсветка изменений" wide>
      <Reveal>
        <h2>Видно, что менял агент</h2>
      </Reveal>
      <div className="split">
        <Reveal className="split__text">
          <Checklist
            items={[
              <>
                Кнопка над деревом блоков — и все изменённые блоки подсвечиваются{' '}
                <b style={{ color: 'var(--purple)' }}>фиолетовым</b>
              </>,
              'В редакторе блока — фильтр показывает поля, отредактированные агентом',
              'Удобно сфокусироваться именно на этих данных',
            ]}
          />
        </Reveal>
        <Reveal className="split__visual">
          <BlockTree
            rows={[
              { label: 'Hero', icon: '▤' },
              { label: 'Преимущества', icon: '▤', changed: true },
              { label: 'Список фич', icon: '▧', depth: 1, changed: true },
              { label: 'Тарифы', icon: '▤' },
              { label: 'CTA-баннер', icon: '▤', changed: true },
              { label: 'Футер', icon: '▤' },
            ]}
          />
        </Reveal>
      </div>
    </Slide>
  )
}
