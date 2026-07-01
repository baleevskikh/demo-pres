import Slide, { Reveal } from '../deck/Slide'
import { Flow } from '../components/primitives'

export default function MigrationFlowSlide() {
  return (
    <Slide align="left" kicker="2.2 · Как проходит миграция" wide>
      <Reveal>
        <h2>Три сценария — от простого к сложному</h2>
      </Reveal>
      <Reveal>
        <Flow
          steps={[
            {
              tag: 'Авто',
              tone: 'auto',
              title: 'Простой случай',
              text: 'Агент полностью переносит блок на новую версию сам.',
            },
            {
              tag: 'Апрув',
              tone: 'approve',
              title: 'Сложный случай',
              text: 'Агент предлагает маппинг свойств и просит подтверждение.',
            },
            {
              tag: 'Правки',
              tone: 'fix',
              title: 'Корректировка',
              text: 'Если агент пошёл не туда — поправьте его прямо в диалоге.',
            },
          ]}
        />
      </Reveal>
    </Slide>
  )
}
