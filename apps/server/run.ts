import { fastifyTRPCPlugin } from '@trpc/server/adapters/fastify'
import Fastify from 'fastify'
import { AppCore } from './app'
import { trpcRoot } from './routes/rootRouter'
import { createContext } from './trpc/trpcCore'

// Instantiate Fastify with some config
const server = Fastify({
	disableRequestLogging: true,
	forceCloseConnections: true,
	trustProxy: true,
	maxParamLength: 2000,
})

server.register(AppCore)

// Register your application as a normal plugin.
server.register(fastifyTRPCPlugin, {
	trpcOptions: { router: trpcRoot, createContext: createContext },
})

if (import.meta.env.PROD) {
	server.listen({ port: 4501 })
}

export const viteFastifyApp = server
