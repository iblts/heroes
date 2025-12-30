import { Button, Dialog, Flex } from '@radix-ui/themes'
import { SelectActionsOrder } from '../../features/actions/select-actions-order'
import { BuildingsGrid } from '../../features/construction/buildings-grid'
import { RoundInfo } from '../../features/game/round-info'
import { MonstersList } from '../../features/monsters/monsters-list'
import { MoveInfo } from '../../features/move/move-info'
import { Resources } from '../../features/resources/resources'
import { useEndGame } from '../../hook/useEndGame'
import styles from './game-page.module.scss'

export const GamePage = () => {
	const handleEndGame = useEndGame()

	return (
		<main className={styles.page}>
			<Flex direction={'column'} gap={'4'} className={styles.aside}>
				<RoundInfo />
				<Resources />
				<SelectActionsOrder />
				<Dialog.Root>
					<Dialog.Trigger>
						<Button variant='outline' color='tomato'>
							Закончить игру
						</Button>
					</Dialog.Trigger>

					<Dialog.Content maxWidth='450px'>
						<Dialog.Title>Закончить игру</Dialog.Title>
						<Dialog.Description size='2' mb='4'>
							Вы уверены, что хотите закончить текущую игру? Это действие нельзя
							отменить!
						</Dialog.Description>

						<Flex gap='3' mt='4' justify='end'>
							<Dialog.Close>
								<Button color='blue'>Отменить</Button>
							</Dialog.Close>
							<Dialog.Close>
								<Button
									variant='outline'
									color='tomato'
									onClick={handleEndGame}
								>
									Закончить
								</Button>
							</Dialog.Close>
						</Flex>
					</Dialog.Content>
				</Dialog.Root>
			</Flex>
			<BuildingsGrid />
			<MoveInfo />
			<MonstersList />
		</main>
	)
}
