import { HeroesList } from '../../features/select-hero/heroes-list'
import styles from './home-page.module.scss'

export const HomePage = () => {
	return (
		<main className={styles.page}>
			<HeroesList />
		</main>
	)
}
