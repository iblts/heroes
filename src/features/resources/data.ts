import type { HeroEnum } from '../select-hero/types'
import type { Resource } from './types'

const DEFAULT_ACTIONS: Resource[] = [
	{ id: 'wood', name: 'Дерево' },
	{ id: 'iron', name: 'Железо' },
	{ id: 'coin', name: 'Монеты' },
	{ id: 'horseshoe', name: 'Подкова' },
	{ id: 'construction', name: 'Строительство' },
] as const

const ROBOTS_ACTIONS: Resource[] = [
	{ id: 'wood', name: 'Дерево' },
	{ id: 'processor', name: 'Процессор' },
	{ id: 'coin', name: 'Монеты' },
	{ id: 'horseshoe', name: 'Подкова' },
	{ id: 'construction', name: 'Строительство' },
] as const

export const HEROES_RESOURCES: Record<HeroEnum, Resource[]> = {
	cultist: DEFAULT_ACTIONS,
	demon: DEFAULT_ACTIONS,
	elf: DEFAULT_ACTIONS,
	gnome: DEFAULT_ACTIONS,
	halfgrown: DEFAULT_ACTIONS,
	human: DEFAULT_ACTIONS,
	naga: DEFAULT_ACTIONS,
	orc: DEFAULT_ACTIONS,
	robot: ROBOTS_ACTIONS,
	undead: DEFAULT_ACTIONS,
	elemental: DEFAULT_ACTIONS,
	gremlin: DEFAULT_ACTIONS,
}
