/**
 * 
 */
$(function(){
	var app=new Vue({
		el:'#app',
		router:router,
		components:{
			'top-nav':httpVueLoader('components/common/Top_nav.vue'),
			'foot-comp':httpVueLoader('components/common/Footer.vue')
		}
	})
}) 