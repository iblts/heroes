import { Flex } from '@radix-ui/themes'
import { useAppSelector } from '../../../lib/store'
import { heroSelector } from '../../select-hero/selectors'
import { BuildingCard } from '../building-card'
import { BUILDINGS_ELF, HEROES_BUILDINGS } from '../data'
import styles from './buildings-grid.module.scss'

export const BuildingsGrid = () => {
	const hero = useAppSelector(heroSelector)
	const buildings = hero ? HEROES_BUILDINGS[hero] : BUILDINGS_ELF
	const levels = [
		buildings.filter(building => building.level === 1),
		buildings.filter(building => building.level === 2),
		buildings.filter(building => building.level === 3),
		buildings.filter(building => building.level === 4),
	]
	const buildingsNamesMap = buildings.reduce<Record<string, string>>(
		(result, building) => {
			result[building.id] = building.name
			return result
		},
		{} as Record<string, string>
	)

	return (
		<Flex className={styles.grid} gap={'4'} direction={'column-reverse'}>
			{levels.map((row, i) => (
				<Flex gap={'4'} key={i}>
					{row.map(building => (
						<BuildingCard
							building={building}
							namesMap={buildingsNamesMap}
							key={building.id}
						/>
					))}
				</Flex>
			))}
		</Flex>
	)
}
