import Slide, { Reveal } from '../deck/Slide'
import { Checklist } from '../components/primitives'

export default function ExamplesSlide() {
  return (
    <Slide align="left" kicker="03 · Планы" wide>
      <Reveal>
        <h2>Работа с примерами</h2>
      </Reveal>
      <Reveal>
        <p className="lead">
          Главное нововведение итерации: указывать примеры страниц, чтобы агент создавал новые по
          образцу уже существующих.
        </p>
      </Reveal>
      <Reveal>
        <Checklist
          items={[
            'Частый кейс: при создании страницы есть ссылки на референсы',
            'С указанием референса ожидаем рост точности агента',
            'Следите за обновлениями в нашем канале',
          ]}
        />
      </Reveal>
      <Reveal>
        <span className="pill pill--purple">В работе · ожидаем в этой итерации</span>
      </Reveal>
    </Slide>
  )
}
