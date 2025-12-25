import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../../lib/store'
import type { ResourceEnum } from './types'

interface ActionsState {
	editing?: ResourceEnum
	error: string
	actionsOrder: Record<ResourceEnum, number | undefined>
}
const initialState: ActionsState = {
	editing: undefined,
	error: '',
	actionsOrder: {
		wood: undefined,
		iron: undefined,
		coin: undefined,
		horseshoe: undefined,
		construction: undefined,
		processor: undefined,
	},
}

export const actionsSlice = createSlice({
	name: 'actions',
	initialState,
	reducers: {
		setActionOrder: (
			state,
			action: PayloadAction<{ action: ResourceEnum; value?: number }>
		) => {
			state.actionsOrder[action.payload.action] = action.payload.value
		},
		setEditingOrder: (
			state,
			action: PayloadAction<ResourceEnum | undefined>
		) => {
			state.editing = action.payload
		},
		checkFields: state => {
			const values = Object.values(state.actionsOrder).filter(
				el => el !== undefined
			)
			if (values.length < 4) {
				state.error = 'Вы выбрали слишком мало событий'
				return
			}
			if (values.length > 4) {
				state.error = 'Вы выбрали слишком много событий'
				return
			}
			if (new Set(values).size !== values.length) {
				state.error = 'Вы ввели повторяющееся значение'
				return
			}
			if (values.some(value => value && (value > 4 || value < 1))) {
				state.error = 'Вы ввели некорректное значение (больше 4 или меньше 1)'
				return
			}
			state.error = ''
		},
	},
})

export const { setActionOrder, setEditingOrder, checkFields } =
	actionsSlice.actions
export const actionsOrderErrorSelector = (state: RootState) =>
	state.actions.error
export const editingSelector = (state: RootState) => state.actions.editing
export const actionsOrderSelector = (state: RootState) =>
	state.actions.actionsOrder
export default actionsSlice.reducer
