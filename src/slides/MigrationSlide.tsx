import Slide, { Reveal } from '../deck/Slide'
import { Checklist } from '../components/primitives'
import MediaFigure from '../components/MediaFigure'
import { media } from '../media'

export default function MigrationSlide() {
  return (
    <Slide align="left" kicker="02 · Обновление версии блоков" wide>
      <Reveal>
        <h2>Миграцию блоков теперь делает агент</h2>
      </Reveal>
      <div className="split">
        <Reveal className="split__text">
          <p className="lead">
            Запрос был давно, но под него было тяжело построить UI. Агент решил это в диалоге и снял
            когнитивную нагрузку с пользователя.
          </p>
          <Checklist
            items={[
              'Простой случай — агент переносит блок сам',
              'Сложный — предлагает маппинг и просит апрув',
              'Пользователь может поправить агента прямо в диалоге',
            ]}
          />
        </Reveal>
        <Reveal className="split__visual">
          <MediaFigure
            video={media.migration}
            caption="Демонстрация: миграция блока на новую версию в диалоге. Клик — открыть на весь экран."
          />
        </Reveal>
      </div>
    </Slide>
  )
}
