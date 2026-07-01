import Slide, { Reveal } from '../deck/Slide'

export default function TitleSlide() {
  return (
    <Slide align="center">
      <Reveal>
        <div className="pill pill--accent">✦ AI-агент для работы с контентом</div>
      </Reveal>
      <Reveal>
        <h1>
          Nessy <span className="gradient-text">Pages</span>
        </h1>
      </Reveal>
      <Reveal>
        <p>Что нового за две итерации — и куда движемся дальше</p>
      </Reveal>
      <Reveal>
        <p style={{ fontSize: 14, opacity: 0.6 }}>
          Демо · листайте ← → · пробел · «F» — на весь экран
        </p>
      </Reveal>
    </Slide>
  )
}
