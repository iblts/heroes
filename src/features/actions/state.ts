import type { PayloadAction } from '@reduxjs/toolkit'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../../lib/store'
import type { ResourceEnum } from './types'

export const checkFieldsThunk = createAsyncThunk<
	void,
	void,
	{ state: RootState; rejectValue: string }
>('actions/checkFields', async (_, { getState, rejectWithValue }) => {
	const { actionsOrder } = getState().actions

	const values = Object.values(actionsOrder).filter(el => el !== undefined)

	if (values.length < 4)
		return rejectWithValue('Вы выбрали слишком мало событий')

	if (values.length > 4)
		return rejectWithValue('Вы выбрали слишком много событий')

	if (new Set(values).size !== values.length)
		return rejectWithValue('Вы ввели повторяющееся значение')

	if (values.some(value => value && (value > 4 || value < 1)))
		return rejectWithValue(
			'Вы ввели некорректное значение (больше 4 или меньше 1)'
		)
})

export interface ActionsState {
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
		any: undefined,
		crac: undefined,
		points: undefined,
		rage: undefined,
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
		resetActions: store => {
			store.actionsOrder = initialState.actionsOrder
			store.editing = initialState.editing
			store.error = initialState.error
		},
	},
	extraReducers: builder => {
		builder
			.addCase(checkFieldsThunk.fulfilled, state => {
				state.error = ''
			})
			.addCase(checkFieldsThunk.rejected, (state, action) => {
				state.error = action.payload ?? 'Ошибка проверки'
			})
	},
})

export const { setActionOrder, setEditingOrder, resetActions } =
	actionsSlice.actions
export default actionsSlice.reducer
