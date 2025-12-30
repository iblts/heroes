import { Button, Flex, Text, TextField } from '@radix-ui/themes'
import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../lib/store'
import {
	currentActionSelector,
	endRound,
	isStartedSelector,
	maxActionSelector,
	startRound,
} from '../../game/state'
import { heroSelector } from '../../select-hero/selectors'
import { ACTIONS_ICONS, HEROES_ACTIONS } from '../data'
import {
	actionsOrderErrorSelector,
	actionsOrderSelector,
	editingSelector,
} from '../selectors'
import { checkFieldsThunk, setActionOrder, setEditingOrder } from '../state'
import type { ResourceEnum } from '../types'
import styles from './select-actions-order.module.scss'

export const SelectActionsOrder = () => {
	const error = useAppSelector(actionsOrderErrorSelector)
	const hero = useAppSelector(heroSelector)
	const editingField = useAppSelector(editingSelector)
	const actionsOrder = useAppSelector(actionsOrderSelector)
	const isStarted = useAppSelector(isStartedSelector)
	const currentAction = useAppSelector(currentActionSelector)
	const maxAction = useAppSelector(maxActionSelector)
	const dispatch = useAppDispatch()
	const [editingValue, setEditingValue] = useState('')
	const disabled = isStarted && currentAction < maxAction
	const handleSubmit = async () => {
		if (!isStarted) {
			try {
				await dispatch(checkFieldsThunk()).unwrap()
				dispatch(startRound())
			} catch {
				return
			}
		} else {
			dispatch(endRound())
		}
	}

	if (!hero) return
	const actions = HEROES_ACTIONS[hero]

	const onSubmit = (actionId: ResourceEnum) => {
		dispatch(
			setActionOrder({
				action: actionId,
				value: editingValue ? +editingValue : undefined,
			})
		)
		dispatch(setEditingOrder(undefined))
	}

	return (
		<Flex className={styles.select} direction={'column'} gap={'2'}>
			<Flex gap={'4'}>
				{actions.map(action => {
					const Icon = ACTIONS_ICONS[action.id]

					return (
						<Flex
							direction={'column'}
							gap={'2'}
							align={'center'}
							minWidth={'32px'}
							key={action.id}
						>
							<Icon />
							{editingField === action.id ? (
								<TextField.Root
									value={editingValue}
									onChange={e => setEditingValue(e.target.value)}
									type='number'
									onKeyDown={e => {
										if (e.key === 'Enter') {
											e.preventDefault()
											onSubmit(action.id)
										}
									}}
									max={4}
									autoFocus
									onBlur={() => onSubmit(action.id)}
									className={styles.input}
								/>
							) : (
								<Button
									onClick={() => {
										dispatch(setEditingOrder(action.id))
										setEditingValue(
											actionsOrder[action.id]
												? String(actionsOrder[action.id])
												: ''
										)
									}}
									className={styles.button}
									disabled={isStarted}
								>
									{actionsOrder[action.id]}
								</Button>
							)}
						</Flex>
					)
				})}
			</Flex>
			<Button onClick={handleSubmit} disabled={disabled}>
				{isStarted ? 'Закончить раунд' : 'Подтвердить'}
			</Button>
			{error && <Text>{error}</Text>}
		</Flex>
	)
}
