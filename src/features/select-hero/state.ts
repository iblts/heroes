import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../../lib/store'
import type { HeroEnum } from './types'

interface HeroState {
	focusedHero?: HeroEnum
	selectedHero?: HeroEnum
}
const initialState: HeroState = {
	focusedHero: undefined,
	selectedHero: undefined,
}

export const heroSlice = createSlice({
	name: 'hero',
	initialState,
	reducers: {
		selectHero: state => {
			state.selectedHero = state.focusedHero
		},
		focusHero: (state, action: PayloadAction<HeroEnum | undefined>) => {
			state.focusedHero = action.payload
		},
	},
})

export const { focusHero, selectHero } = heroSlice.actions
export const heroSelector = (state: RootState) => state.hero.selectedHero
export const focusedHeroSelector = (state: RootState) => state.hero.focusedHero
export default heroSlice.reducer
