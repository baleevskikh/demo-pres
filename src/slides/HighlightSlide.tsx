import Slide, { Reveal } from '../deck/Slide'
import { Shot, Checklist } from '../components/primitives'

export default function HighlightSlide() {
  return (
    <Slide align="left" kicker="02 · Подсветка изменений" wide>
      <Reveal>
        <h2>Видно, что менял агент</h2>
      </Reveal>
      <div className="split split--visual-left">
        <Reveal className="split__visual">
          <Shot caption="Дерево блоков: изменённые агентом блоки подсвечены фиолетовым; в редакторе блока — фильтр по изменённым полям." />
        </Reveal>
        <Reveal className="split__text">
          <Checklist
            tone="purple"
            items={[
              <>
                Кнопка над деревом — и изменённые блоки подсвечены{' '}
                <b style={{ color: 'var(--purple)' }}>фиолетовым</b>
              </>,
              'В редакторе блока фильтр показывает поля, отредактированные агентом',
              'Удобно сфокусироваться именно на этих данных',
            ]}
          />
        </Reveal>
      </div>
    </Slide>
  )
}
