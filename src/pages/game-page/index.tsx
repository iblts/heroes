import { Button, Text } from '@radix-ui/themes'
import { SelectActionsOrder } from '../../features/actions/select-actions-order'
import {
	actionsOrderErrorSelector,
	checkFields,
} from '../../features/actions/state'
import { useAppDispatch, useAppSelector } from '../../lib/store'
import styles from './game-page.module.scss'

export const GamePage = () => {
	const error = useAppSelector(actionsOrderErrorSelector)
	const dispatch = useAppDispatch()
	const handleSubmit = () => {
		dispatch(checkFields())
	}

	return (
		<main className={styles.page}>
			<SelectActionsOrder />
			<Button onClick={handleSubmit}>Подтвердить</Button>
			{error && <Text>{error}</Text>}
		</main>
	)
}
