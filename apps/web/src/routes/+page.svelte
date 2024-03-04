<script lang="ts">
	import { trpc } from '../lib/trpc'

	const query = trpc().greet.createQuery(undefined, {
		// i believe this is working as expected, not the createServerQuery tho
		refetchOnMount: false,
	})
</script>

hello {$query.data?.hello}
