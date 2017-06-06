// The following line loads the standalone build of Vue instead of the runtime-only build,
// so you don't have to do: import Vue from 'vue/dist/vue'
// This is done with the browser options. For the config, see package.json
import Vue from 'vue'
import App from './App.vue'
import Main from './components/Main.vue'
import Test from './components/Test.vue'
import Login from './components/Login.vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)
const router = new VueRouter({
	routes : [
		{
			name : 'Home',
			path : '/',
			//redirect : '/login',
			component : Main
		},
		{
			name : 'Test',
			path : '/test',
			component : Test,
			props: {default:true, mensaje: 'hola', msg2:'como estas inti'} 
		},
		{
			name : 'Login',
			path : '/login',
			component : Login
		}
	]
})
new Vue({ // eslint-disable-line no-new
	router,
	render: (h) => h(App)
}).$mount('#app');
