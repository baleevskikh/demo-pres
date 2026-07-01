import Slide, { Reveal } from '../deck/Slide'
import { ChatPanel } from '../components/primitives'

export default function PromptsSlide() {
  return (
    <Slide align="left" kicker="Набор подсказок" wide>
      <Reveal>
        <h2>Не знаете, с чего начать? Тыкните подсказку</h2>
      </Reveal>
      <div className="split">
        <Reveal className="split__text">
          <p className="lead">
            Мы добавили набор готовых подсказок. Нажмите на одну — и агент проведёт вас по нужному
            flow.
          </p>
        </Reveal>
        <Reveal className="split__visual">
          <ChatPanel
            standalone
            messages={[
              {
                from: 'agent',
                text: 'С чего начнём? Выберите подсказку или напишите запрос своими словами.',
              },
            ]}
            chips={[
              'Что ты умеешь?',
              'Создай продуктовую страницу',
              'Обнови версию блока',
              'Собери страницу по примеру',
            ]}
            placeholder="…или напишите свой запрос"
          />
        </Reveal>
      </div>
    </Slide>
  )
}
