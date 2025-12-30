import { Flex, Text } from '@radix-ui/themes'
import { Swords } from 'lucide-react'
import { ACTIONS_ICONS } from '../../actions/data'
import type { ResourceEnum } from '../../actions/types'
import type { Monster } from '../types'
import styles from './monster-card.module.scss'

export const MonsterCard = ({ monster }: { monster: Monster }) => {
	return (
		<Flex className={styles.card} gap={'4'} direction={'column'}>
			<Flex gap={'1'} justify={'center'}>
				<Swords />
				<Text>{monster.power}</Text>
			</Flex>
			<Flex
				gap={'1'}
				direction={'column'}
				wrap={'wrap'}
				maxHeight={'72px'}
				align={'center'}
			>
				{Object.entries(monster.loot)
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
		</Flex>
	)
}
