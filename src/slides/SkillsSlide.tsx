import Slide, { Reveal } from '../deck/Slide'
import { Cards, PillRow } from '../components/primitives'

export default function SkillsSlide() {
  return (
    <Slide align="left" kicker="2.1 · Скиллы" wide>
      <Reveal>
        <h2>Агент знает, как устроены разные виды страниц</h2>
      </Reveal>
      <Reveal>
        <p className="lead">
          Знания подгружаются динамически: просите создать нужный вид страницы — агент строит её по
          заранее определённому паттерну и точнее подбирает блоки.
        </p>
      </Reveal>
      <Reveal>
        <Cards
          cols={3}
          items={[
            { icon: '🛍', title: 'Продуктовые', text: 'Страницы конкретного продукта' },
            { icon: '🧭', title: 'Разводящие', text: 'Навигация и выбор направления' },
            { icon: '📣', title: 'Рекламные', text: 'Промо и акционные страницы' },
          ]}
        />
      </Reveal>
      <Reveal>
        <PillRow
          items={[
            { label: 'Динамическая подгрузка знаний', tone: 'accent' },
            { label: 'Нативно с план-модом' },
            { label: 'Точный подбор блоков' },
          ]}
        />
      </Reveal>
    </Slide>
  )
}
