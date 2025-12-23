export type HeroEnum =
	| 'robot'
	| 'human'
	| 'orc'
	| 'elf'
	| 'undead'
	| 'gnome'
	| 'naga'
	| 'cultist'
	| 'elemental'
	| 'gremlin'
	| 'demon'
	| 'halfgrown'

export type HeroNameEnum =
	| 'Механизмы'
	| 'Люди'
	| 'Орки'
	| 'Эльфы'
	| 'Нежить'
	| 'Гномы'
	| 'Наги'
	| 'Культисты'
	| 'Элементали'
	| 'Гремлины'
	| 'Демоны'
	| 'Полурослики'

export type Hero = {
	id: HeroEnum
	name: HeroNameEnum
}
