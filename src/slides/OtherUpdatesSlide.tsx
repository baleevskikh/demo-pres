import Slide, { Reveal } from '../deck/Slide'
import { Cards } from '../components/primitives'

export default function OtherUpdatesSlide() {
  return (
    <Slide align="left" kicker="02 · Прочие улучшения" wide>
      <Reveal>
        <h2>Продолжаем полировать ядро</h2>
      </Reveal>
      <Reveal>
        <Cards
          cols={2}
          items={[
            {
              icon: '🛡',
              title: 'Обновление дерева контента',
              text: 'Больше валидаций и больше знаний агента об устройстве дерева — генерация стала стабильнее.',
            },
            {
              icon: '💬',
              title: 'Новый UI вопросов',
              text: 'Варианты ответов теперь показываются над инпутом.',
            },
          ]}
        />
      </Reveal>
      <Reveal>
        <p className="lead">
          Ловили проблемы при генерации в прошлые разы? Проверьте сейчас — должно стать заметно лучше.
        </p>
      </Reveal>
    </Slide>
  )
}
