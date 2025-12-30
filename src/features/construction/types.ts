import type { ResourceEnum } from '../actions/types'

export interface Building {
	id: string
	name: string
	description: string
	price: Partial<Record<ResourceEnum, number>>
	level: number
	dependencies: string[]
}
