export type ResourceEnum =
	| 'iron'
	| 'wood'
	| 'coin'
	| 'horseshoe'
	| 'construction'
	| 'processor'

export type ResourceNameEnum =
	| 'Железо'
	| 'Дерево'
	| 'Монеты'
	| 'Подкова'
	| 'Строительство'
	| 'Процессор'

export type Resource = {
	id: ResourceEnum
	name: ResourceNameEnum
}
