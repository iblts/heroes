import type { HeroEnum } from '../select-hero/types'
import type { Move } from './types'

export const MOVE_BASE: Move = {
	desert: [1],
	forest: [2],
	rock: [2],
	water: [3],
}

const MOVE_ELF: Move = {
	desert: [1],
	forest: [2, 1],
	rock: [3, 2],
	water: [2],
}

const MOVE_NAGA: Move = {
	desert: [1],
	forest: [2],
	rock: [3],
	water: [1],
}

const MOVE_GNOME: Move = {
	desert: [1],
	forest: [2],
	rock: [2],
	water: [3],
}

const MOVE_UNDEAD: Move = {
	desert: [2],
	forest: [2],
	rock: [2],
	water: [2],
}

const MOVE_ORC: Move = {
	desert: [1],
	forest: [2],
	rock: [3, 1],
	water: [2],
}

const MOVE_HUMAN = {
	desert: [1],
	forest: [2, 1],
	rock: [3, 2],
	water: [2],
}

const MOVE_ROBOT = {
	desert: [2],
	forest: [2],
	rock: [1],
	water: [3],
}

const MOVE_CULTIST = {
	desert: [3, 2],
	forest: [1],
	rock: [2],
	water: [2],
}

const MOVE_ELEMENTAL = {
	desert: [1],
	forest: [3, 2, 1],
	rock: [2],
	water: [2],
}

const MOVE_GREMLIN = {
	desert: [1],
	forest: [2],
	rock: [3],
	water: [2],
}

const MOVE_DEMON = {
	desert: [1],
	forest: [2],
	rock: [3],
	water: [2],
}

const MOVE_HALFGROWN = {
	desert: [2, 1],
	forest: [2, 1],
	rock: [2, 1],
	water: [2, 1],
}

export const HEROES_MOVE: Record<HeroEnum, Move> = {
	cultist: MOVE_CULTIST,
	demon: MOVE_DEMON,
	robot: MOVE_ROBOT,
	elemental: MOVE_ELEMENTAL,
	gremlin: MOVE_GREMLIN,
	halfgrown: MOVE_HALFGROWN,
	elf: MOVE_ELF,
	gnome: MOVE_GNOME,
	human: MOVE_HUMAN,
	naga: MOVE_NAGA,
	orc: MOVE_ORC,
	undead: MOVE_UNDEAD,
}
