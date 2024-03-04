import { QueryClient } from '@tanstack/svelte-query'
import { trpc } from '../lib/trpc'
import { browser } from '$app/environment'
import type { LayoutLoad } from './$types'

export const load: LayoutLoad = async event => {
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				enabled: browser,
			},
		},
	})

	// prefetch
	await trpc(queryClient).greet.createServerQuery(undefined, {
		refetchOnMount: false,
		enabled: false,
	})

	return { queryClient }
}
