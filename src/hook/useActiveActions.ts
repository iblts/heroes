import { useMemo } from 'react'
import { actionsOrderSelector } from '../features/actions/selectors'
import type { ResourceEnum } from '../features/actions/types'
import { useAppSelector } from '../lib/store'

export const useActiveActions = () => {
	const actionsOrder = useAppSelector(actionsOrderSelector)
	const activeActions = useMemo(
		() =>
			Object.entries(actionsOrder)
				.filter(action => action[1] !== undefined)
				// eslint-disable-next-line @typescript-eslint/no-unused-vars
				.sort(([_, a], [__, b]) => a! - b!)
				.map(action => action[0]) as ResourceEnum[],
		[actionsOrder]
	)

	return activeActions
}
