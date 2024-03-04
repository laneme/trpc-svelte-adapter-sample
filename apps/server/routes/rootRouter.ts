import { baseProcedure, trpcRouter } from '../trpc/trpcCore'

export const trpcRoot = trpcRouter({
	greet: baseProcedure.query(async () => {
		return { hello: 'world' }
	}),
})

export type TRPCRootRouter = typeof trpcRoot
