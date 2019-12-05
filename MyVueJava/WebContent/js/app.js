/**
 * 
 */
$(function(){
	var app=new Vue({
		el:'#app',
		components:{
			'top-nav':httpVueLoader('components/common/Top_nav.vue'),
			'foot-comp':httpVueLoader('components/common/Footer.vue')
		}
	})
}) 