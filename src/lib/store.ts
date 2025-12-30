import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import actionsReducer, { type ActionsState } from '../features/actions/state'
import buildingsReducer, {
	type BuildingsState,
} from '../features/construction/state'
import gameReducer, { type GameState } from '../features/game/state'
import resourceReducer, {
	type ResourcesState,
} from '../features/resources/state'
import heroReducer, { type HeroState } from '../features/select-hero/state'
import { LOCAL_STORAGE_KEY } from '../utils/constants'

const persistedState = localStorage.getItem(LOCAL_STORAGE_KEY)
	? JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) ?? '')
	: {}

export const store = configureStore<{
	hero: HeroState
	actions: ActionsState
	resources: ResourcesState
	game: GameState
	buildings: BuildingsState
}>({
	reducer: {
		hero: heroReducer,
		actions: actionsReducer,
		resources: resourceReducer,
		game: gameReducer,
		buildings: buildingsReducer,
	},
	preloadedState: persistedState,
})

store.subscribe(() => {
	localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(store.getState()))
})

export type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
