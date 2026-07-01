import Slide, { Reveal } from '../deck/Slide'
import { Shot, Checklist } from '../components/primitives'

export default function MigrationSlide() {
  return (
    <Slide align="left" kicker="02 · Обновление версии блоков" wide>
      <Reveal>
        <h2>Миграцию блоков теперь делает агент</h2>
      </Reveal>
      <Reveal>
        <p className="lead">
          Запрос был давно, но под него было тяжело построить UI. Агент решил это элегантно — миграция
          идёт в диалоге и снимает когнитивную нагрузку с пользователя.
        </p>
      </Reveal>
      <div className="split">
        <Reveal className="split__text">
          <Checklist
            items={[
              'Простой случай — агент переносит блок сам',
              'Сложный — предлагает маппинг свойств и просит апрув',
              'Пользователь может поправить агента прямо в диалоге',
            ]}
          />
        </Reveal>
        <Reveal className="split__visual">
          <Shot caption="Диалог миграции: предложенный агентом маппинг свойств и запрос подтверждения." />
        </Reveal>
      </div>
    </Slide>
  )
}
