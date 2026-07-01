import Slide, { Reveal } from '../deck/Slide'
import { PillRow, Checklist } from '../components/primitives'
import MediaFigure from '../components/MediaFigure'
import { media } from '../media'

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
          <MediaFigure
            src={media.skill}
            fit
            alt="Агент загружает скилл product-page и переходит к планированию"
            caption="«Собери продуктовую страницу» → агент подгружает скилл product-page и переходит в фазу планирования."
          />
        </Reveal>
      </div>
    </Slide>
  )
}
