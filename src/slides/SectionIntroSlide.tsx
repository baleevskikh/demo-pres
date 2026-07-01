import Slide, { Reveal } from '../deck/Slide'
import { SectionCover } from '../components/primitives'

export default function SectionIntroSlide() {
  return (
    <Slide align="left">
      <Reveal>
        <SectionCover num="01" title="Знакомство с агентом" />
      </Reveal>
    </Slide>
  )
}
