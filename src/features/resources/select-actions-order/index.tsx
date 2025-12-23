import { useAppSelector } from '../../../lib/store'
import { heroSelector } from '../../select-hero/state'
import { HEROES_ACTIONS } from '../data'
import styles from './select-actions-order.module.scss'

export const SelectActionsOrder = () => {
	const hero = useAppSelector(heroSelector)
	if (!hero) return
	const actions = HEROES_ACTIONS[hero]

	return (
		<ul className={styles.select}>
			{actions.map(action => (
				<li>
					<button>{action.name}</button>
				</li>
			))}
		</ul>
	)
}
