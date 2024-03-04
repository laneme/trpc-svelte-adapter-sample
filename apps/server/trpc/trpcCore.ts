import { initTRPC, type inferAsyncReturnType } from '@trpc/server'
import type { CreateFastifyContextOptions } from '@trpc/server/adapters/fastify'
import superjson from 'superjson'


export function createContext({ req, res }: CreateFastifyContextOptions) {
	return { req, res,   }
}
export type Context = inferAsyncReturnType<typeof createContext>

/**
 * Initialization of tRPC backend
 * Should be done only once per backend!
 */
const t = initTRPC.context<typeof createContext>().create({
	transformer: superjson,
})

/**
 * Export reusable router and procedure helpers
 * that can be used throughout the router
 */
export const trpcRouter = t.router
export const trpcMiddleware = t.middleware
export const trpcMerge = t.mergeRouters

// procedures
export const baseProcedure = t.procedure
