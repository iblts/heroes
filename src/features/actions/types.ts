export type ResourceEnum =
	| 'iron'
	| 'wood'
	| 'coin'
	| 'horseshoe'
	| 'construction'
	| 'processor'
	| 'rage'
	| 'crac'
	| 'points'
	| 'any'

export type ResourceNameEnum =
	| 'Железо'
	| 'Дерево'
	| 'Монеты'
	| 'Подкова'
	| 'Строительство'
	| 'Процессор'
	| 'Ярость'
	| 'ПО'
	| 'Любой ресурс'

export type Resource = {
	id: ResourceEnum
	name: ResourceNameEnum
}
