import clsx from 'clsx'
import { useAppSelector } from '../../../lib/store'
import { focusedHeroSelector, heroSelector } from '../state'
import type { Hero } from '../types'
import styles from './hero-card.module.scss'

interface HeroCardProps
	extends React.DetailedHTMLProps<
		React.ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	hero: Hero
}

export const HeroCard = ({ hero }: HeroCardProps) => {
	const isFocused = useAppSelector(focusedHeroSelector) === hero.id
	const isSelected = useAppSelector(heroSelector) === hero.id

	return (
		<button
			className={clsx(styles.hero, {
				[styles.focused]: isFocused,
				[styles.selected]: isSelected,
			})}
		>
			{hero.name}
		</button>
	)
}
