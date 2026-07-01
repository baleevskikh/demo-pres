import Slide, { Reveal } from '../deck/Slide'
import { SectionCover, AgendaList } from '../components/primitives'

export default function SectionUpdatesSlide() {
  return (
    <Slide align="left" wide>
      <div className="split split--visual-left">
        <Reveal className="split__text">
          <SectionCover num="02" title="Обновления за две итерации" />
        </Reveal>
        <Reveal className="split__text">
          <AgendaList
            items={[
              { label: 'Скиллы' },
              { label: 'Обновление версии блоков' },
              { label: 'Подсветка изменений агента' },
              { label: 'Прочие улучшения ядра' },
            ]}
          />
        </Reveal>
      </div>
    </Slide>
  )
}
