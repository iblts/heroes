import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../lib/store'

export type SpecialActions = 'construction' | 'processor' | 'hourseshoe'

export interface GameState {
	isStarted: boolean
	round: number
	maxAction: number
	currentAction: number
	actionType?: SpecialActions
}

const initialState: GameState = {
	isStarted: false,
	round: 0,
	maxAction: 4,
	currentAction: 0,
	actionType: undefined,
}

export const gameSlice = createSlice({
	name: 'game',
	initialState,
	reducers: {
		startRound: state => {
			state.isStarted = true
			state.round++
		},
		endRound: state => {
			state.isStarted = false
			state.currentAction = 1
		},
		nextAction: state => {
			state.currentAction++
			state.actionType = undefined
		},
		setActionType: (state, action: PayloadAction<SpecialActions>) => {
			state.actionType = action.payload
		},
		resetGame: state => {
			state.actionType = initialState.actionType
			state.currentAction = initialState.currentAction
			state.isStarted = initialState.isStarted
			state.maxAction = initialState.maxAction
			state.round = initialState.round
		},
	},
})

export const { startRound, endRound, nextAction, setActionType, resetGame } =
	gameSlice.actions
export const isStartedSelector = (state: RootState) => state.game.isStarted
export const roundSelector = (state: RootState) => state.game.round
export const currentActionSelector = (state: RootState) =>
	state.game.currentAction
export const maxActionSelector = (state: RootState) => state.game.maxAction
export const actionTypeSelector = (state: RootState) => state.game.actionType
export default gameSlice.reducer
