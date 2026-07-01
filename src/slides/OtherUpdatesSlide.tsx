import Slide, { Reveal } from '../deck/Slide'
import { Cards } from '../components/primitives'

export default function OtherUpdatesSlide() {
  return (
    <Slide align="left" kicker="2.4 · Прочие улучшения" wide>
      <Reveal>
        <h2>Продолжаем полировать ядро</h2>
      </Reveal>
      <Reveal>
        <Cards
          cols={2}
          items={[
            {
              icon: '🛡',
              title: 'Больше валидаций',
              text: 'Комплексно доработали механизмы обновления дерева контента.',
            },
            {
              icon: '🌳',
              title: 'Знания о дереве',
              text: 'Дали агенту больше знаний об устройстве дерева контента.',
            },
            {
              icon: '💬',
              title: 'Новый UI вопросов',
              text: 'Варианты ответов теперь показываются над инпутом.',
            },
            {
              icon: '⚙️',
              title: 'Стабильность',
              text: 'Улучшили генерацию и починили баги. Ловили проблемы раньше — проверьте сейчас.',
            },
          ]}
        />
      </Reveal>
    </Slide>
  )
}
