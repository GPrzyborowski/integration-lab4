<script setup lang="ts">
import Header from '../components/Header.vue'
</script>

<template>
	<Header text="Simplified library management system" />
	<img src="/library.png" alt="shelf with books" class="max-w-sm md:max-w-md lg:max-w-2xl mx-auto mt-12" />
	<div class="flex flex-1 items-center justify-center mt-24">
		<div class="flex">
			<router-link to="/books" class="group relative inline-block text-sm font-medium mx-4 text-indigo-600">
				<span
					class="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-indigo-600 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></span>

				<span class="relative block border border-current bg-white px-8 py-3"> Books </span></router-link
			>

			<router-link to="/loans" class="group relative inline-block text-sm font-medium mx-4 text-indigo-600">
				<span
					class="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-indigo-600 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></span>

				<span class="relative block border border-current bg-white px-8 py-3"> Loans </span></router-link
			>
		</div>
	</div>
</template>
