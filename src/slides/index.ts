import type { SlideEntry } from '../deck/types'
import TitleSlide from './TitleSlide'
import IntroSlide from './IntroSlide'
import StartSlide from './StartSlide'
import UpdatesOverviewSlide from './UpdatesOverviewSlide'
import SkillsSlide from './SkillsSlide'
import MigrationSlide from './MigrationSlide'
import HighlightSlide from './HighlightSlide'
import OtherUpdatesSlide from './OtherUpdatesSlide'
import ExamplesSlide from './ExamplesSlide'
import ClosingSlide from './ClosingSlide'

// Порядок слайдов в презентации. Добавляй новые компоненты сюда.
export const slides: SlideEntry[] = [
  { id: 'title', component: TitleSlide },
  // 01 · Интро
  { id: 'intro', component: IntroSlide },
  { id: 'start', component: StartSlide },
  // 02 · Обновления
  { id: 'updates', component: UpdatesOverviewSlide },
  { id: 'skills', component: SkillsSlide },
  { id: 'migration', component: MigrationSlide },
  { id: 'highlight', component: HighlightSlide },
  { id: 'other-updates', component: OtherUpdatesSlide },
  // 03 · Планы
  { id: 'examples', component: ExamplesSlide },
  { id: 'closing', component: ClosingSlide },
]
