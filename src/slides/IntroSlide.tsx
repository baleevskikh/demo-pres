import Slide, { Reveal } from '../deck/Slide'
import { Checklist } from '../components/primitives'
import MediaFigure from '../components/MediaFigure'
import { media } from '../media'

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
          <MediaFigure
            src={media.editorSidebar}
            alt="Редактор контента с кнопкой Nessy Pages в шапке и открытым сайдбаром"
            caption="Кнопка Nessy Pages в шапке и открытый сайдбар справа — там общение и действия."
          />
        </Reveal>
      </div>
    </Slide>
  )
}
