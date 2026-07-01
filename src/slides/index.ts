import type { SlideEntry } from '../deck/types'
import TitleSlide from './TitleSlide'
import AgendaSlide from './AgendaSlide'
import SectionIntroSlide from './SectionIntroSlide'
import WhereSlide from './WhereSlide'
import CycleSlide from './CycleSlide'
import HowToStartSlide from './HowToStartSlide'
import PromptsSlide from './PromptsSlide'
import DemoIntroSlide from './DemoIntroSlide'
import SectionUpdatesSlide from './SectionUpdatesSlide'
import SkillsSlide from './SkillsSlide'
import DemoSkillsSlide from './DemoSkillsSlide'
import MigrationSlide from './MigrationSlide'
import MigrationFlowSlide from './MigrationFlowSlide'
import DemoMigrationSlide from './DemoMigrationSlide'
import HighlightSlide from './HighlightSlide'
import DemoHighlightSlide from './DemoHighlightSlide'
import OtherUpdatesSlide from './OtherUpdatesSlide'
import SectionPlansSlide from './SectionPlansSlide'
import ExamplesSlide from './ExamplesSlide'
import ClosingSlide from './ClosingSlide'

// Порядок слайдов в презентации. Добавляй новые компоненты сюда.
export const slides: SlideEntry[] = [
  { id: 'title', component: TitleSlide },
  { id: 'agenda', component: AgendaSlide },
  // 01 · Интро
  { id: 'section-intro', component: SectionIntroSlide },
  { id: 'where', component: WhereSlide },
  { id: 'cycle', component: CycleSlide },
  { id: 'how-to-start', component: HowToStartSlide },
  { id: 'prompts', component: PromptsSlide },
  { id: 'demo-intro', component: DemoIntroSlide },
  // 02 · Обновления
  { id: 'section-updates', component: SectionUpdatesSlide },
  { id: 'skills', component: SkillsSlide },
  { id: 'demo-skills', component: DemoSkillsSlide },
  { id: 'migration', component: MigrationSlide },
  { id: 'migration-flow', component: MigrationFlowSlide },
  { id: 'demo-migration', component: DemoMigrationSlide },
  { id: 'highlight', component: HighlightSlide },
  { id: 'demo-highlight', component: DemoHighlightSlide },
  { id: 'other-updates', component: OtherUpdatesSlide },
  // 03 · Планы
  { id: 'section-plans', component: SectionPlansSlide },
  { id: 'examples', component: ExamplesSlide },
  { id: 'closing', component: ClosingSlide },
]
