import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'home',
		component: Home
	},
	{
		path: '/contact',
		name: 'contact',
		component: () => import('../views/Contact.vue')
	},
	{
		path: '/blog',
		name: 'blog',
		component: () => import('../views/Blog.vue')
	},
	{
		path: '/hotels',
		name: 'hotels',
		component: () => import('../views/Hotels.vue')
	},
	{
		path: '/packages',
		name: 'packages',
		component: () => import('../views/Packages.vue')
	},
	{
		path: '*',
		name: 'error',
		component: () => import('../views/404.vue')
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
