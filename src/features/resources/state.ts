import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import type { ResourceEnum } from '../actions/types'

export type ResourcesState = Record<ResourceEnum, number>

const initialState: ResourcesState = {
	wood: 0,
	iron: 0,
	coin: 0,
	horseshoe: 0,
	construction: 0,
	processor: 0,
	any: 0,
	crac: 0,
	points: 0,
	rage: 0,
}

export const resourcesSlice = createSlice({
	name: 'resources',
	initialState,
	reducers: {
		addResource: (
			state,
			action: PayloadAction<{ action: ResourceEnum; value: number }>
		) => {
			state[action.payload.action] += action.payload.value
		},
		removeResource: (
			state,
			action: PayloadAction<{ action: ResourceEnum; value: number }>
		) => {
			state[action.payload.action] -= action.payload.value
		},
		resetResourses: state => {
			state.coin = initialState.coin
			state.wood = initialState.wood
			state.iron = initialState.iron
			state.rage = initialState.rage
		},
	},
})

export const { addResource, removeResource, resetResourses } =
	resourcesSlice.actions
export default resourcesSlice.reducer
