import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../../lib/store'

export interface BuildingsState {
	builded: string[]
	thisRoundBuy: boolean
}

const initialState: BuildingsState = {
	builded: [],
	thisRoundBuy: false,
}

export const buildingsSlice = createSlice({
	name: 'buildings',
	initialState,
	reducers: {
		addBuilded: (state, action: PayloadAction<string>) => {
			state.builded.push(action.payload)
		},
		resetBuilded: state => {
			state.builded = initialState.builded
		},
		setThisRoundBuy: (state, action: PayloadAction<boolean>) => {
			state.thisRoundBuy = action.payload
		},
	},
})

export const buildingsSelector = (state: RootState) => state.buildings.builded
export const thisRoundBuySelector = (state: RootState) =>
	state.buildings.thisRoundBuy
export const { addBuilded, resetBuilded, setThisRoundBuy } =
	buildingsSlice.actions
export default buildingsSlice.reducer
