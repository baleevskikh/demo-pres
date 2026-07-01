import Slide, { Reveal } from '../deck/Slide'
import { DemoSlot } from '../components/primitives'

export default function DemoMigrationSlide() {
  return (
    <Slide align="center" kicker="Демо">
      <Reveal>
        <DemoSlot
          label="Мигрируем блок в диалоге"
          caption="Просим обновить версию блока, смотрим предложенный маппинг и подтверждаем."
        />
      </Reveal>
    </Slide>
  )
}
