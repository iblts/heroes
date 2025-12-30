import { Button, Flex, Text } from '@radix-ui/themes'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useActiveActions } from '../../../hook/useActiveActions'
import { useAppSelector } from '../../../lib/store'
import { ACTIONS_ICONS } from '../../actions/data'
import { addResource } from '../../resources/state'
import {
	currentActionSelector,
	isStartedSelector,
	nextAction,
	roundSelector,
	setActionType,
} from '../state'
import styles from './round-info.module.scss'

export const RoundInfo = () => {
	const round = useAppSelector(roundSelector)
	const currentAction = useAppSelector(currentActionSelector)
	const activeActions = useActiveActions()
	const dispatch = useDispatch()
	const isStarted = useAppSelector(isStartedSelector)

	useEffect(() => {
		if (!isStarted) return
		const action = activeActions[currentAction]
		if (action === 'coin' || action === 'iron' || action === 'wood') {
			dispatch(addResource({ action, value: currentAction + 1 }))
			dispatch(nextAction())
			return
		}
		if (action === 'construction') {
			dispatch(setActionType('construction'))
		} else if (action === 'horseshoe') {
			dispatch(setActionType('hourseshoe'))
		} else if (action === 'processor') {
			dispatch(setActionType('processor'))
		}
	}, [isStarted, currentAction, activeActions, dispatch])

	const Icon = ACTIONS_ICONS[activeActions[currentAction]]

	const specialAction =
		isStarted &&
		(activeActions[currentAction] === 'construction' ||
			activeActions[currentAction] === 'horseshoe')

	const handleNextAction = () => {
		dispatch(nextAction())
	}

	return (
		<Flex direction={'column'} gap={'2'}>
			<Text
				size={'8'}
				weight={'bold'}
				align={'center'}
				className={styles.round}
			>
				Раунд {round}
			</Text>
			{isStarted && (
				<Flex gap={'2'} align={'center'}>
					<Text size={'4'}>Стадия: </Text>
					{Icon && <Icon />}
				</Flex>
			)}
			{specialAction && (
				<Button onClick={handleNextAction}>Завершить действие</Button>
			)}
		</Flex>
	)
}
