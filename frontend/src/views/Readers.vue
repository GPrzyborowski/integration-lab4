<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Header from '../components/Header.vue'
import ReaderRecord from '../components/ReaderRecord.vue'

type User = {
	id: string
	name: string
	email: string
}

const users = ref<User[]>([])

const getReaders = async () => {
	const res = await fetch('http://localhost:5000/api/get-users')
	const data = await res.json()
	users.value = data
}
onMounted(getReaders)
</script>

<template>
	<Header text="Readers" />
	<div class="grid grid-cols-1 lg:grid-cols-2 mt-12 md:mt-14 lg:mt-16 px-6">
		<div>
			<table class="table-auto w-full border border-gray-200 rounded-lg overflow-hidden">
				<thead class="bg-gray-100 text-left">
					<tr>
						<th class="px-4 py-2">ID</th>
						<th class="px-4 py-2">Name</th>
						<th class="px-4 py-2">Email</th>
					</tr>
				</thead>

				<tbody class="[&>tr:nth-child(even)]:bg-gray-100">
					<ReaderRecord v-for="user in users" :key="user.id" :id="user.id" :name="user.name" :email="user.email" />
				</tbody>
			</table>
		</div>
		<div class="max-w-9/10 mx-auto mt-12 lg:col-span-1"></div>
	</div>
</template>
