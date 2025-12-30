import type { RootState } from '../../lib/store'

export const actionsOrderErrorSelector = (state: RootState) =>
	state.actions.error
export const editingSelector = (state: RootState) => state.actions.editing
export const actionsOrderSelector = (state: RootState) =>
	state.actions.actionsOrder
