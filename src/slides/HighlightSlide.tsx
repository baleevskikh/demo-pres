import Slide, { Reveal } from '../deck/Slide'
import MediaFigure from '../components/MediaFigure'
import { media } from '../media'

export default function HighlightSlide() {
  return (
    <Slide align="left" kicker="02 · Подсветка изменений" wide>
      <Reveal>
        <h2>Видно, что менял агент</h2>
      </Reveal>
      <Reveal>
        <p className="lead">
          Кнопка над деревом подсвечивает изменённые блоки{' '}
          <b style={{ color: 'var(--purple)' }}>фиолетовым</b>, а фильтр в редакторе блока показывает
          поля, отредактированные агентом.
        </p>
      </Reveal>
      <Reveal>
        <div className="figure-row">
          <MediaFigure
            src={media.highlightTree}
            fit
            alt="Изменённые агентом блоки подсвечены в дереве"
            caption="Кнопка над деревом → изменённые блоки подсвечены."
          />
          <MediaFigure
            src={media.highlightFilter}
            fit
            alt="Фильтр «Отредактированные AI-агентом» в редакторе блока"
            caption="Фильтр «Отредактированные AI-агентом» — только изменённые поля."
          />
        </div>
      </Reveal>
    </Slide>
  )
}
