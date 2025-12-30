import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { resetActions } from '../features/actions/state'
import { resetBuilded } from '../features/construction/state'
import { resetGame } from '../features/game/state'
import { resetResourses } from '../features/resources/state'
import { resetHero } from '../features/select-hero/state'

export const useEndGame = () => {
	const dispatch = useDispatch()
	const router = useNavigate()
	const handleEndGame = () => {
		dispatch(resetResourses())
		dispatch(resetHero())
		dispatch(resetGame())
		dispatch(resetBuilded())
		dispatch(resetActions())
		router('/')
	}

	return handleEndGame
}
