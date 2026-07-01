import Slide, { Reveal } from '../deck/Slide'

export default function ClosingSlide() {
  return (
    <Slide align="center">
      <Reveal>
        <div className="pill pill--accent">✦ Nessy Pages</div>
      </Reveal>
      <Reveal>
        <h1>Спасибо!</h1>
      </Reveal>
      <Reveal>
        <p>Открывайте редактор и напишите агенту «Привет! Что ты умеешь?»</p>
      </Reveal>
      <Reveal>
        <p style={{ fontSize: 16, opacity: 0.7 }}>
          Следите за обновлениями в нашем канале
        </p>
      </Reveal>
    </Slide>
  )
}
