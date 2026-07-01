import Slide, { Reveal } from '../deck/Slide'
import { DemoSlot } from '../components/primitives'

export default function DemoHighlightSlide() {
  return (
    <Slide align="center" kicker="Демо">
      <Reveal>
        <DemoSlot
          label="Смотрим, что изменил агент"
          caption="Включаем подсветку над деревом блоков и открываем фильтр полей в редакторе блока."
        />
      </Reveal>
    </Slide>
  )
}
