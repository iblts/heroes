import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import type { HeroEnum } from './types'

export interface HeroState {
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
		resetHero: state => {
			state.focusedHero = undefined
			state.selectedHero = undefined
		},
	},
})

export const { focusHero, selectHero, resetHero } = heroSlice.actions
export default heroSlice.reducer
