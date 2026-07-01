import Slide, { Reveal } from '../deck/Slide'
import { DemoSlot } from '../components/primitives'

export default function DemoSkillsSlide() {
  return (
    <Slide align="center" kicker="Демо">
      <Reveal>
        <DemoSlot
          label="Создаём страницу через скилл"
          caption="Выбираем тип страницы в план-моде и смотрим, как агент собирает её по паттерну."
        />
      </Reveal>
    </Slide>
  )
}
