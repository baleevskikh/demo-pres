import Slide, { Reveal } from '../deck/Slide'
import { Cards } from '../components/primitives'

export default function MigrationSlide() {
  return (
    <Slide align="left" kicker="2.2 · Обновление версии блоков" wide>
      <Reveal>
        <h2>Миграцию блоков теперь делает агент</h2>
      </Reveal>
      <Reveal>
        <Cards
          cols={2}
          items={[
            {
              icon: '🧩',
              title: 'Запрос был давно',
              text: 'Пользователи хотели удобный способ мигрировать блоки. А мы долго не могли придумать, как построить под это UI.',
            },
            {
              icon: '✨',
              title: 'Решили в диалоге',
              text: 'Агент снимает когнитивную нагрузку: не нужно самому думать, как смапить свойства блока — он берёт это на себя.',
              purple: true,
            },
          ]}
        />
      </Reveal>
    </Slide>
  )
}
