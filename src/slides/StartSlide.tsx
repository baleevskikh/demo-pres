import Slide, { Reveal } from '../deck/Slide'
import { Shot, Checklist } from '../components/primitives'

export default function StartSlide() {
  return (
    <Slide align="left" kicker="01 · Интро" wide>
      <Reveal>
        <h2>Как начать — без спец-навыков</h2>
      </Reveal>
      <div className="split split--visual-left">
        <Reveal className="split__visual">
          <Shot caption="Сайдбар с набором подсказок: одна кнопка — и агент проведёт по нужному flow." />
        </Reveal>
        <Reveal className="split__text">
          <Checklist
            items={[
              'Откройте редактор на своём отображении',
              'Напишите «Привет! Что ты умеешь?» — агент всё расскажет',
              'Или тыкните одну из подсказок, если не знаете, с чего начать',
              'Дальше экспериментируйте: от правки блока до страницы с нуля',
            ]}
          />
        </Reveal>
      </div>
    </Slide>
  )
}
