import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home'
import List from '../pages/liss'
import Shan from '../pages/shan'
import Ping from '../pages/ping'

Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			component: Home,
			children: [{
					path: '/ping',
					component: Ping
				},

				{
					path: '/liss',
					component: List
				},
				{
					path: '/shan',
					component: Shan
				}

			]
		}

	]
})