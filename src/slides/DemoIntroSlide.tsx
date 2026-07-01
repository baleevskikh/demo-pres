import Slide, { Reveal } from '../deck/Slide'
import { DemoSlot } from '../components/primitives'

export default function DemoIntroSlide() {
  return (
    <Slide align="center" kicker="Демо">
      <Reveal>
        <DemoSlot
          label="Знакомство с агентом"
          caption="Открываем редактор, вызываем Nessy Pages из шапки и пишем первый запрос."
        />
      </Reveal>
    </Slide>
  )
}
