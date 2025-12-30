import type { RootState } from '../../lib/store'

export const heroSelector = (state: RootState) => state.hero.selectedHero
export const focusedHeroSelector = (state: RootState) => state.hero.focusedHero
