var router=new VueRouter({
	routes:[
		{
			path:'/',
			component:httpVueLoader('components/main/Home.vue')
		}
	]
})