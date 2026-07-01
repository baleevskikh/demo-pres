import type { SlideEntry } from '../deck/types'
import TitleSlide from './TitleSlide'
import FeaturesSlide from './FeaturesSlide'
import CodeSlide from './CodeSlide'

// Порядок слайдов в презентации. Добавляй новые компоненты сюда.
export const slides: SlideEntry[] = [
  { id: 'title', component: TitleSlide },
  { id: 'features', component: FeaturesSlide },
  { id: 'code', component: CodeSlide },
]
