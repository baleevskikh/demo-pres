import Slide, { Reveal } from '../deck/Slide'
import { Shot, PillRow, Checklist } from '../components/primitives'

export default function SkillsSlide() {
  return (
    <Slide align="left" kicker="02 · Скиллы" wide>
      <Reveal>
        <h2>Знания о том, как устроены виды страниц</h2>
      </Reveal>
      <div className="split">
        <Reveal className="split__text">
          <Checklist
            items={[
              'Знания подгружаются динамически по запросу',
              'Агент строит страницу по заранее определённому паттерну',
              'Точнее подбирает блоки',
              'Нативно интегрируется с план-модом',
            ]}
          />
          <PillRow
            items={[
              { label: 'Продуктовые', tone: 'accent' },
              { label: 'Разводящие', tone: 'accent' },
              { label: 'Рекламные', tone: 'accent' },
            ]}
          />
        </Reveal>
        <Reveal className="split__visual">
          <Shot caption="План-мод: выбор типа страницы, под который агент подгружает нужный скилл." />
        </Reveal>
      </div>
    </Slide>
  )
}
