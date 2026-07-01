import Slide, { Reveal } from '../deck/Slide'
import { EditorFrame, CanvasSkeleton, ChatPanel, Checklist } from '../components/primitives'

export default function WhereSlide() {
  return (
    <Slide align="left" kicker="Где живёт" wide>
      <Reveal>
        <h2>Живёт в редакторе контента</h2>
      </Reveal>
      <div className="split">
        <Reveal className="split__text">
          <Checklist
            items={[
              'Найти можно только в редакторе контента',
              'Открывается кнопкой в шапке',
              'Справа выезжает сайдбар — там общение и действия',
            ]}
          />
          <span className="pill pill--accent">Обновление · кнопка переехала в шапку</span>
        </Reveal>
        <Reveal className="split__visual">
          <EditorFrame pulsing>
            <CanvasSkeleton />
            <ChatPanel
              messages={[
                { from: 'user', text: 'Добавь блок с преимуществами' },
                { from: 'agent', text: 'Готово — вставил блок и заполнил поля ✦' },
              ]}
              placeholder="Напишите агенту…"
            />
          </EditorFrame>
        </Reveal>
      </div>
    </Slide>
  )
}
