import { Flex } from '@radix-ui/themes'
import { useAppSelector } from '../../../lib/store'
import { heroSelector } from '../../select-hero/selectors'
import { HEROES_MONSTERS, MONSTERS_BASE } from '../data'
import { MonsterCard } from '../monster-card'
import styles from './monsters-list.module.scss'

export const MonstersList = () => {
	const hero = useAppSelector(heroSelector)
	const monsters = hero ? HEROES_MONSTERS[hero] : MONSTERS_BASE

	return (
		<Flex gap={'4'} className={styles.monsters}>
			{monsters.map(monster => (
				<MonsterCard monster={monster} key={monster.power} />
			))}
		</Flex>
	)
}
