import Slide, { Reveal } from '../deck/Slide'

export default function FeaturesSlide() {
  return (
    <Slide align="left" kicker="Возможности">
      <Reveal>
        <h2>Что уже умеет каркас</h2>
      </Reveal>
      <Reveal>
        <ul>
          <li>Слайды на весь экран + нативный fullscreen по «F»</li>
          <li>Навигация с клавиатуры: ← → · пробел · Home / End</li>
          <li>Плавные переходы между слайдами (Framer Motion)</li>
          <li>Каждый слайд — отдельный React-компонент на TypeScript</li>
          <li>Точки-прогресс и счётчик слайдов</li>
        </ul>
      </Reveal>
    </Slide>
  )
}
