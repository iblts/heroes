import { Button } from '@radix-ui/themes'
import clsx from 'clsx'
import { useAppDispatch, useAppSelector } from '../../../lib/store'
import { focusedHeroSelector, focusHero, heroSelector } from '../state'
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
	const dispatch = useAppDispatch()

	return (
		<Button
			className={clsx(styles.hero, {
				[styles.focused]: isFocused,
				[styles.selected]: isSelected,
			})}
			onClick={() => dispatch(focusHero(hero.id))}
		>
			{hero.name}
		</Button>
	)
}
