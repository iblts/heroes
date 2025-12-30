import type { Resource } from '../actions/types'
import type { HeroEnum } from '../select-hero/types'

export const RESOURCES_BASE: Resource[] = [
	{
		id: 'coin',
		name: 'Монеты',
	},
	{
		id: 'wood',
		name: 'Дерево',
	},
	{
		id: 'iron',
		name: 'Железо',
	},
]

const RESOURCES_ROBOT: Resource[] = [
	{
		id: 'coin',
		name: 'Монеты',
	},
	{
		id: 'wood',
		name: 'Дерево',
	},
	{
		id: 'processor',
		name: 'Процессор',
	},
]

const RESOURCES_ORC: Resource[] = [
	{
		id: 'coin',
		name: 'Монеты',
	},
	{
		id: 'wood',
		name: 'Дерево',
	},
	{
		id: 'iron',
		name: 'Железо',
	},
	{
		id: 'rage',
		name: 'Ярость',
	},
]

export const HEROES_RESOURCES: Record<HeroEnum, Resource[]> = {
	cultist: RESOURCES_BASE,
	demon: RESOURCES_BASE,
	robot: RESOURCES_ROBOT,
	elemental: RESOURCES_BASE,
	gremlin: RESOURCES_BASE,
	halfgrown: RESOURCES_BASE,
	elf: RESOURCES_BASE,
	gnome: RESOURCES_BASE,
	human: RESOURCES_BASE,
	naga: RESOURCES_BASE,
	orc: RESOURCES_ORC,
	undead: RESOURCES_BASE,
}
