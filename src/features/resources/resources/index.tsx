import { Flex, Text } from '@radix-ui/themes'
import { useAppSelector } from '../../../lib/store'
import { ACTIONS_ICONS } from '../../actions/data'
import { heroSelector } from '../../select-hero/selectors'
import { HEROES_RESOURCES, RESOURCES_BASE } from '../data'
import styles from './resources.module.scss'

export const Resources = () => {
	const hero = useAppSelector(heroSelector)
	const resources = hero ? HEROES_RESOURCES[hero] : RESOURCES_BASE
	const resourcesValues = useAppSelector(store => store.resources)

	return (
		<Flex className={styles.resources} gap={'2'} direction={'column'}>
			{resources.map(resource => {
				const Icon = ACTIONS_ICONS[resource.id]
				return (
					<Flex gap={'2'} key={resource.id + resource.name}>
						<Icon />
						<Text>{resourcesValues[resource.id] ?? 0}</Text>
					</Flex>
				)
			})}
		</Flex>
	)
}
