import Slide, { Reveal } from '../deck/Slide'
import { SectionCover } from '../components/primitives'

export default function SectionPlansSlide() {
  return (
    <Slide align="left">
      <Reveal>
        <SectionCover num="03" title="Планы на итерацию" />
      </Reveal>
    </Slide>
  )
}
