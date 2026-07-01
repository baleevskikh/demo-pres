import Slide, { Reveal } from '../deck/Slide'
import { ChatPanel, Checklist } from '../components/primitives'

export default function HowToStartSlide() {
  return (
    <Slide align="left" kicker="Как начать" wide>
      <Reveal>
        <h2>Спец-навыки не нужны</h2>
      </Reveal>
      <div className="split split--visual-left">
        <Reveal className="split__visual">
          <ChatPanel
            standalone
            messages={[
              { from: 'user', text: 'Привет! Что ты умеешь?' },
              {
                from: 'agent',
                text: (
                  <>
                    Привет! Я помогу с контентом: вижу структуру страницы, меняю и добавляю блоки,
                    собираю страницу с нуля. Хотите — <b>покажу на вашей странице?</b>
                  </>
                ),
              },
            ]}
            placeholder="Напишите агенту…"
          />
        </Reveal>
        <Reveal className="split__text">
          <Checklist
            items={[
              'Откройте редактор на своём отображении',
              'Напишите «Привет! Что ты умеешь?»',
              'Агент сам расскажет, на что способен',
              'Дальше — экспериментируйте: от правки блока до страницы с нуля',
            ]}
          />
        </Reveal>
      </div>
    </Slide>
  )
}
