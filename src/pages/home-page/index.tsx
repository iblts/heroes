import { Button } from '@radix-ui/themes'
import { useNavigate } from 'react-router'
import { HeroesList } from '../../features/select-hero/heroes-list'
import {
	focusedHeroSelector,
	selectHero,
} from '../../features/select-hero/state'
import { useAppDispatch, useAppSelector } from '../../lib/store'
import styles from './home-page.module.scss'

export const HomePage = () => {
	const isFocused = !!useAppSelector(focusedHeroSelector)
	const dispatch = useAppDispatch()
	const router = useNavigate()

	const handleSelect = () => {
		dispatch(selectHero())
		router('/game')
	}

	return (
		<main className={styles.page}>
			<HeroesList />
			<Button disabled={!isFocused} onClick={handleSelect}>
				Выбрать
			</Button>
		</main>
	)
}
