import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../../lib/store'

export interface BuildingsState {
	builded: string[]
}

const initialState: BuildingsState = {
	builded: [],
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
	},
})

export const buildingsSelector = (state: RootState) => state.buildings.builded
export const { addBuilded, resetBuilded } = buildingsSlice.actions
export default buildingsSlice.reducer
