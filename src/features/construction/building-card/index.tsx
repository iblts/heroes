import { Button } from '@radix-ui/themes'
import styles from './building-card.module.scss'

export const BuildingCard = () => {
	return (
		<article className={styles.card}>
			<Button>Купить</Button>
		</article>
	)
}
