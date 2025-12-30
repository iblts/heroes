import type { HeroEnum } from '../select-hero/types'
import type { Monster } from './types'

export const MONSTERS_BASE: Monster[] = [
	{
		power: 2,
		loot: {
			points: 1,
			any: 0,
			coin: 0,
			iron: 0,
			wood: 0,
		},
	},
	{
		power: 3,
		loot: {
			points: 1,
			any: 2,
			coin: 0,
			iron: 0,
			wood: 0,
		},
	},

	{
		power: 5,
		loot: {
			points: 1,
			any: 0,
			coin: 1,
			iron: 1,
			wood: 1,
		},
	},
	{
		power: 8,
		loot: {
			points: 2,
			any: 0,
			coin: 2,
			iron: 2,
			wood: 2,
		},
	},
	{
		power: 13,
		loot: {
			points: 3,
			any: 5,
			coin: 0,
			iron: 0,
			wood: 0,
		},
	},
	{
		power: 19,
		loot: {
			points: 4,
			any: 0,
			coin: 2,
			iron: 2,
			wood: 2,
		},
	},
	{
		power: 25,
		loot: {
			points: 5,
			any: 0,
			coin: 3,
			iron: 3,
			wood: 3,
		},
	},
	{
		power: 32,
		loot: {
			points: 7,
			any: 0,
			coin: 4,
			iron: 4,
			wood: 4,
		},
	},
]

export const HEROES_MONSTERS: Record<HeroEnum, Monster[]> = {
	cultist: MONSTERS_BASE,
	demon: MONSTERS_BASE,
	robot: MONSTERS_BASE,
	elemental: MONSTERS_BASE,
	gremlin: MONSTERS_BASE,
	halfgrown: MONSTERS_BASE,
	elf: MONSTERS_BASE,
	gnome: MONSTERS_BASE,
	human: MONSTERS_BASE,
	naga: MONSTERS_BASE,
	orc: MONSTERS_BASE,
	undead: MONSTERS_BASE,
}
