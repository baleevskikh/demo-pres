import Slide, { Reveal } from '../deck/Slide'

export default function TitleSlide() {
  return (
    <Slide align="center">
      <Reveal>
        <h1>
          Презентация в айдентике <span className="gradient-text">Т-Банк</span>
        </h1>
      </Reveal>
      <Reveal>
        <p>React + TypeScript · Vite · Framer Motion</p>
      </Reveal>
      <Reveal>
        <p style={{ fontSize: 14, opacity: 0.7 }}>
          Листай ← → · пробел · «F» — на весь экран
        </p>
      </Reveal>
    </Slide>
  )
}
