import Slide, { Reveal } from '../deck/Slide'
import { AgendaList } from '../components/primitives'

export default function UpdatesOverviewSlide() {
  return (
    <Slide align="left" kicker="02 · Обновления" wide>
      <Reveal>
        <h2>Главное за две итерации</h2>
      </Reveal>
      <Reveal>
        <AgendaList
          items={[
            'Скиллы',
            'Обновление версии блоков',
            'Подсветка изменений агента',
            'Прочие улучшения ядра',
          ]}
        />
      </Reveal>
    </Slide>
  )
}
