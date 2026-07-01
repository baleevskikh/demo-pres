import Slide, { Reveal } from '../deck/Slide'

const snippet = `// src/slides/index.ts — добавить слайд просто:
import MyNewSlide from './MyNewSlide'

export const slides: SlideEntry[] = [
  { id: 'title',    component: TitleSlide },
  { id: 'features', component: FeaturesSlide },
  { id: 'my-slide', component: MyNewSlide }, // ← новый
]`

export default function CodeSlide() {
  return (
    <Slide align="left" kicker="Как добавить слайд">
      <Reveal>
        <h2>Один компонент — один слайд</h2>
      </Reveal>
      <Reveal>
        <pre className="code">
          <code>{snippet}</code>
        </pre>
      </Reveal>
      <Reveal>
        <p>Порядок слайдов задаётся типизированным массивом в одном месте.</p>
      </Reveal>
    </Slide>
  )
}
