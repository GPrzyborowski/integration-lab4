import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Books from '../views/Books.vue'
import Loans from '../views/Loans.vue'

const routes = [
	{
		path: '/',
		component: Home,
	},
	{
		path: '/books',
		component: Books,
	},
	{
		path: '/loans',
		component: Loans,
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router
