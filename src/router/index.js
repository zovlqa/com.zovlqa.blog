import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);



export default new Router({
	mode: 'history',
	scrollBehavior: () => ({
		y:0
	}),
	routes: [
		{ path: '/', component: resolve => require(['../views/index.vue'], resolve) },
		{ path: '/about', component: resolve => require(['../views/about.vue'], resolve) },
		{ path: '/shopping', component: resolve => require(['../views/shopping.vue'], resolve) },
		{ path: '*', redirect: '/about' }
	]
});