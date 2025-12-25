export interface Building {
	id: string
	name: string
	description: string
	price: { wood: number; iron: number; coin: number }
	level: number
	dependency?: string
}
