import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Chat from '@/components/Chat'
import Error from '@/components/Error'
import Me from '@/components/Me'
import Request from '@/components/Request'
import Chating from '@/components/Chating'


Vue.use(Router)

const router =  new Router({
  routes: [
    {
      path: '/chat',
      name: 'Chat',
      component: Chat
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },{
			path: '/register',
			name: 'Register',
			component: Register
		},{
			path:'/me',
			name:'Me',
			component:Me
		},
		{
			path:'/request',
			name:'request',
			component:Request
		},
		{
			path:'/chating',
			name:'chating',
			component:Chating,
		}
		,
		{
			path: '*',
			name: '404',
			component: Error
		}
  ]
})
//路由守卫
router.beforeEach((to, from, next) => {
		// localStorage.removeItem('userToken')
	if (!localStorage.userToken) {
		if (to.path === "/login" || to.path === "/register") {
			next();
		} else {
			next("/login");
		}
	} else {
		if (to.path === "/login" || to.path === "/register" || to.path === '/') {
			next("/chat");
		} else {
			next();
		}
	}
});

export default router;
