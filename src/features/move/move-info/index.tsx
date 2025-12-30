import { Flex } from '@radix-ui/themes'
import { MountainSnow, Sun, TreePine, Waves } from 'lucide-react'
import { useAppSelector } from '../../../lib/store'
import { heroSelector } from '../../select-hero/selectors'
import { HEROES_MOVE, MOVE_BASE } from '../data'
import styles from './move-info.module.scss'

export const MoveInfo = () => {
	const hero = useAppSelector(heroSelector)
	const move = hero ? HEROES_MOVE[hero] : MOVE_BASE

	return (
		<Flex className={styles.list} gap={'4'}>
			<Flex gap={'1'}>
				<Sun /> {move.desert.join(' > ')}
			</Flex>
			<Flex gap={'1'}>
				<TreePine /> {move.forest.join(' > ')}
			</Flex>
			<Flex gap={'1'}>
				<MountainSnow /> {move.rock.join(' > ')}
			</Flex>
			<Flex gap={'1'}>
				<Waves /> {move.water.join(' > ')}
			</Flex>
		</Flex>
	)
}
