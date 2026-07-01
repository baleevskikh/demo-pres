import Slide, { Reveal } from '../deck/Slide'
import { Cards } from '../components/primitives'

export default function CycleSlide() {
  return (
    <Slide align="left" kicker="Зачем нужен" wide>
      <Reveal>
        <h2>Почти весь цикл работы с контентом</h2>
      </Reveal>
      <Reveal>
        <p className="lead">Мы делаем агента, чтобы упростить работу с контентом. Сегодня он умеет:</p>
      </Reveal>
      <Reveal>
        <Cards
          cols={2}
          items={[
            { icon: '👁', title: 'Видит структуру', text: 'Понимает, из каких блоков собрана страница' },
            { icon: '✏️', title: 'Изменяет блоки', text: 'Правит поля и содержимое по запросу' },
            { icon: '🔍', title: 'Ищет блоки', text: 'Находит нужные блоки на странице' },
            { icon: '➕', title: 'Вставляет и обновляет', text: 'Добавляет новые блоки и обновляет их' },
          ]}
        />
      </Reveal>
    </Slide>
  )
}
