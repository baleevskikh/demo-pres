import Slide, { Reveal } from '../deck/Slide'
import { Checklist } from '../components/primitives'
import MediaFigure from '../components/MediaFigure'
import { media } from '../media'

export default function StartSlide() {
  return (
    <Slide align="left" kicker="01 · Интро" wide>
      <Reveal>
        <h2>Как начать — без спец-навыков</h2>
      </Reveal>
      <div className="split split--visual-left">
        <Reveal className="split__visual">
          <MediaFigure
            src={media.hints}
            fit
            alt="Сайдбар агента с набором подсказок"
            caption="Пустой сайдбар предлагает подсказки — одна кнопка проведёт по нужному flow."
          />
        </Reveal>
        <Reveal className="split__text">
          <Checklist
            items={[
              'Откройте редактор на своём отображении',
              'Напишите «Привет! Что ты умеешь?» — агент всё расскажет',
              'Или тыкните подсказку: «Создать страницу с нуля», «Внести точную правку»',
              'Дальше экспериментируйте: от правки блока до страницы с нуля',
            ]}
          />
        </Reveal>
      </div>
    </Slide>
  )
}
