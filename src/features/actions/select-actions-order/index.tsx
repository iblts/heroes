import { Button, Text, TextField } from '@radix-ui/themes'
import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../lib/store'
import { heroSelector } from '../../select-hero/state'
import { HEROES_ACTIONS } from '../data'
import {
	actionsOrderSelector,
	editingSelector,
	setActionOrder,
	setEditingOrder,
} from '../state'
import type { ResourceEnum } from '../types'
import styles from './select-actions-order.module.scss'

export const SelectActionsOrder = () => {
	const hero = useAppSelector(heroSelector)
	const editingField = useAppSelector(editingSelector)
	const actionsOrder = useAppSelector(actionsOrderSelector)
	const dispatch = useAppDispatch()
	const [editingValue, setEditingValue] = useState('')
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
		<ul className={styles.select}>
			{actions.map(action => (
				<li>
					<Text>{action.name}</Text>
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
						/>
					) : (
						<Button
							onClick={() => {
								dispatch(setEditingOrder(action.id))
								setEditingValue(
									actionsOrder[action.id] ? String(actionsOrder[action.id]) : ''
								)
							}}
						>
							{actionsOrder[action.id]}
						</Button>
					)}
				</li>
			))}
		</ul>
	)
}
