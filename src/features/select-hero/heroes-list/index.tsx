import { createRootRoute } from '@tanstack/react-router'
import { HEROES } from '../data'
import { HeroCard } from '../hero-card'
import styles from './heroes-list.module.scss'

export const HeroesList = () => {
	return (
		<ul className={styles.list}>
			{HEROES.map(hero => (
				<HeroCard hero={hero} />
			))}
		</ul>
	)
}

export const Route = createRootRoute()
