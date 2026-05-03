<script setup lang="ts">
defineProps({
	title: String,
	author: String,
})
</script>

<template>
	<div class="w-2xs">
		<article class="rounded-lg border border-gray-100 bg-white p-4 shadow-xs transition hover:shadow-lg sm:p-6">
			<span class="inline-block rounded-sm bg-indigo-600 p-2 text-white">
				<img src="/book.svg" alt="book icon" />
			</span>

			<h3 class="mt-0.5 text-lg font-medium text-gray-900">{{ title }}</h3>

			<p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">{{ author }}</p>
		</article>
	</div>
</template>
