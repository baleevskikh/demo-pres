import Slide, { Reveal } from '../deck/Slide'
import { AgendaList } from '../components/primitives'

export default function AgendaSlide() {
  return (
    <Slide align="left" kicker="О чём поговорим" wide>
      <Reveal>
        <h2>Три части</h2>
      </Reveal>
      <Reveal>
        <AgendaList
          items={[
            { label: 'Что такое Nessy Pages', desc: 'как открыть и с чего начать' },
            { label: 'Обновления за две итерации', desc: 'скиллы · миграции · подсветка' },
            { label: 'Планы на итерацию', desc: 'работа с примерами' },
          ]}
        />
      </Reveal>
    </Slide>
  )
}
