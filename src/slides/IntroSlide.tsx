import Slide, { Reveal } from '../deck/Slide'
import { Shot, Checklist } from '../components/primitives'

export default function IntroSlide() {
  return (
    <Slide align="left" kicker="01 · Интро" wide>
      <Reveal>
        <h2>Что такое агент и где он живёт</h2>
      </Reveal>
      <div className="split">
        <Reveal className="split__text">
          <Checklist
            items={[
              'Живёт в редакторе контента — только там',
              'Открывается кнопкой в шапке (раньше была со стрелочками)',
              'Справа выезжает сайдбар для общения и действий',
              'Видит структуру страницы: меняет, ищет и вставляет блоки',
            ]}
          />
        </Reveal>
        <Reveal className="split__visual">
          <Shot caption="Редактор контента с кнопкой агента в шапке и открытым сайдбаром справа." />
        </Reveal>
      </div>
    </Slide>
  )
}
