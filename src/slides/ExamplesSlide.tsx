import Slide, { Reveal } from '../deck/Slide'
import { ChatPanel, Checklist } from '../components/primitives'

export default function ExamplesSlide() {
  return (
    <Slide align="left" kicker="Главное нововведение" wide>
      <Reveal>
        <h2>Работа с примерами</h2>
      </Reveal>
      <div className="split split--visual-left">
        <Reveal className="split__visual">
          <ChatPanel
            standalone
            messages={[
              { from: 'user', text: 'Собери страницу как вот эта → /pages/deposit-2024' },
              {
                from: 'agent',
                text: (
                  <>
                    Беру за образец. Повторю структуру и подберу блоки под ваш продукт. Начинаю ✦
                  </>
                ),
              },
            ]}
            placeholder="Вставьте ссылку на референс…"
          />
        </Reveal>
        <Reveal className="split__text">
          <Checklist
            items={[
              'Указываете страницы-примеры',
              'Агент создаёт новые по образцу существующих',
              'Частый кейс: при создании есть ссылки на референсы',
              'Ждём, что точность работы агента заметно вырастет',
            ]}
          />
          <span className="pill pill--purple">В работе · ожидаем в этой итерации</span>
        </Reveal>
      </div>
    </Slide>
  )
}
