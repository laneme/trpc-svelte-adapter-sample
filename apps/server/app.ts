import fastifyCors from '@fastify/cors'
import sensible from '@fastify/sensible'
import { FastifyInstance } from 'fastify'
import fastifyPlugin from 'fastify-plugin'

/* eslint-disable-next-line */
export interface AppOptions {}

export const AppCore = fastifyPlugin(async function app(
	fastify: FastifyInstance,
	opts: AppOptions,
) {
	fastify.register(sensible)

	fastify.register(fastifyCors, {
		credentials: true,
		origin: 'https://localhost:4500',
	})
})
