<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';

	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';

	let { form }: { form: ActionData } = $props();
</script>

<div class="mx-auto h-full max-w-7xl py-16">
	<div class="flex justify-between">
		<h1 class="text-4xl font-bold text-slate-800">Blog Generator</h1>
		<p class="font-medium text-blue-500">By Liam Lyness</p>
	</div>

	<div class="flex h-full gap-x-10 py-10">
		<div class="w-1/3">
			<p>Use the text box below to enter a prompt that a blog post will generate for you.</p>
			<p class="mt-3">Be as brief or descriptive as you would like</p>

			<form class="mt-5 rounded-2xl bg-blue-800 p-5 text-white" method="post" use:enhance>
				<label for="prompt" class="font-semibold">Enter your blog promopt</label>
				<textarea class="mt-2 w-full resize rounded-xl p-2 text-slate-800" rows="5" name="prompt" />
				<button
					class="mt-5 rounded-xl bg-white px-5 py-2 font-semibold text-blue-800 duration-200 hover:text-blue-600"
					>Generate</button
				>
			</form>
		</div>
		<div class="flex h-full w-full flex-col gap-5 rounded-2xl bg-blue-800 p-10">
			{#if form}
				<div
					class="overflow-y-scroll rounded-2xl bg-white p-5 text-blue-800 [&>h1]:mb-5 [&>h1]:text-2xl [&>h1]:font-bold [&>h2]:mb-3 [&>h2]:text-xl [&>h2]:font-semibold [&>p]:mb-3 [&>p]:text-base"
					id="response-wrap"
				>
					<SvelteMarkdown source={form.response} />
				</div>
			{/if}
		</div>
	</div>
</div>

<style>
	#response-wrap h1 {
		font-size: 3rem;
		padding-bottom: 10px;
	}

	#response-wrap h2 {
		font-size: 2.5rem;
		padding-bottom: 10px;
	}

	#response-wrap p {
		font-size: 1rem;
		padding-bottom: 10px;
	}

	#response-wrap ol {
		font-size: 1rem;
		padding-bottom: 10px;
	}

	#response-wrap ul {
		font-size: 1rem;
		padding-bottom: 10px;
	}
</style>
