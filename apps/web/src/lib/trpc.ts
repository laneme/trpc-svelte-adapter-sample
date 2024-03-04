import type { TRPCRootRouter } from './../../../server/routes/rootRouter'
import { createTRPCProxyClient, httpBatchLink } from '@trpc/client'
import { svelteQueryWrapper } from 'trpc-svelte-query-adapter'
import SuperJSON from 'superjson'
import urlJoin from 'proper-url-join'
import type { QueryClient } from '@tanstack/svelte-query'

const proxyClient = createTRPCProxyClient<TRPCRootRouter>({
	links: [
		httpBatchLink({
			// Replace this URL with that of your tRPC server
			url: 'http://localhost:4501',
		}),
	],
	transformer: SuperJSON,
})

export const trpc = (queryClient?: QueryClient) =>
	svelteQueryWrapper<TRPCRootRouter>({ client: proxyClient, queryClient })
