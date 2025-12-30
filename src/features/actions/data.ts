import {
	Anvil,
	CircleDollarSign,
	Flame,
	Hammer,
	Magnet,
	Medal,
	Snail,
	Toolbox,
	TreeDeciduous,
	type LucideProps,
} from 'lucide-react'
import type { HeroEnum } from '../select-hero/types'
import type { Resource, ResourceEnum } from './types'

export const ACTIONS_BASE: Resource[] = [
	{ id: 'wood', name: 'Дерево' },
	{ id: 'iron', name: 'Железо' },
	{ id: 'coin', name: 'Монеты' },
	{ id: 'horseshoe', name: 'Подкова' },
	{ id: 'construction', name: 'Строительство' },
] as const

const ACTIONS_ROBOT: Resource[] = [
	{ id: 'wood', name: 'Дерево' },
	{ id: 'processor', name: 'Процессор' },
	{ id: 'coin', name: 'Монеты' },
	{ id: 'horseshoe', name: 'Подкова' },
	{ id: 'construction', name: 'Строительство' },
] as const

export const HEROES_ACTIONS: Record<HeroEnum, Resource[]> = {
	cultist: ACTIONS_BASE,
	demon: ACTIONS_BASE,
	elf: ACTIONS_BASE,
	gnome: ACTIONS_BASE,
	halfgrown: ACTIONS_BASE,
	human: ACTIONS_BASE,
	naga: ACTIONS_BASE,
	orc: ACTIONS_BASE,
	robot: ACTIONS_ROBOT,
	undead: ACTIONS_BASE,
	elemental: ACTIONS_BASE,
	gremlin: ACTIONS_BASE,
}

export const ACTIONS_ICONS: Record<
	ResourceEnum,
	React.ForwardRefExoticComponent<
		Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
	>
> = {
	coin: CircleDollarSign,
	wood: TreeDeciduous,
	construction: Hammer,
	iron: Anvil,
	horseshoe: Magnet,
	processor: Anvil,
	rage: Flame,
	crac: Snail,
	points: Medal,
	any: Toolbox,
}
