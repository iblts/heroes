import { Button, Flex, Text } from '@radix-ui/themes'
import { useDispatch } from 'react-redux'
import { useActiveActions } from '../../../hook/useActiveActions'
import { useAppSelector } from '../../../lib/store'
import { ACTIONS_ICONS } from '../../actions/data'
import type { ResourceEnum } from '../../actions/types'
import { currentActionSelector } from '../../game/state'
import { removeResource } from '../../resources/state'
import { addBuilded, buildingsSelector } from '../state'
import type { Building } from '../types'
import styles from './building-card.module.scss'

export const BuildingCard = ({
	building,
	namesMap,
}: {
	building: Building
	namesMap: Record<string, string>
}) => {
	const resources = useAppSelector(store => store.resources)
	const price = building.price
	const buildings = useAppSelector(buildingsSelector)
	const isBuilded = buildings.some(b => b === building.id)
	const dispatch = useDispatch()
	const handleBuy = () => {
		if (price.coin) {
			dispatch(removeResource({ action: 'coin', value: price.coin }))
		}
		if (price.iron) {
			dispatch(removeResource({ action: 'iron', value: price.iron }))
		}
		if (price.wood) {
			dispatch(removeResource({ action: 'wood', value: price.wood }))
		}
		if (price.rage) {
			dispatch(removeResource({ action: 'rage', value: price.rage }))
		}
		dispatch(addBuilded(building.id))
	}

	const hasMoney =
		(price.coin ? resources.coin >= price.coin : true) &&
		(price.iron ? resources.iron >= price.iron : true) &&
		(price.wood ? resources.wood >= price.wood : true) &&
		(price.rage ? resources.rage >= price.rage : true)

	const activeActions = useActiveActions()
	const currentAction = useAppSelector(currentActionSelector)

	const disabled =
		!hasMoney || isBuilded || activeActions[currentAction] !== 'construction'

	return (
		<article className={styles.card}>
			<Text size={isBuilded ? '5' : '4'}>{building.name}</Text>
			{building.dependencies.length > 0 && (
				<Text>
					Зависимость:{' '}
					{building.dependencies
						.map(dependecy => namesMap[dependecy])
						.join(' / ')}
				</Text>
			)}
			<Flex gap={'4'}>
				{Object.entries(building.price)
					// eslint-disable-next-line @typescript-eslint/no-unused-vars
					.filter(([_, value]) => !!value)
					.map(([key, value]) => {
						const Icon = ACTIONS_ICONS[key as ResourceEnum]

						return (
							<Flex gap={'1'} key={key + value}>
								<Icon />
								<Text>{value}</Text>
							</Flex>
						)
					})}
			</Flex>
			{!isBuilded && (
				<Button onClick={handleBuy} disabled={disabled}>
					Купить
				</Button>
			)}
		</article>
	)
}
