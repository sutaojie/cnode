// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$http = axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
//时间过滤器
Vue.filter('formatDate',(str)=>{
	if(!str) return '';

	var date = new Date(str)
	var time = new Date().getTime() - date.getTime()
	if(time<0){
		return ''
	}else if((time/1000 < 30)){
		return '刚刚'
	}else if((time/1000 < 60)){
		return parseInte((time/1000)) + '秒前'
	}else if((time/60000 < 60)){
		return parseInt((time/60000)) + '分钟前'
	}else if((time/3600000) < 24){
		return parseInt((time/3600000)) + '小时前'
	}else if((time/(3600000*24)) < 31){
		return parseInt((time/(3600000*24))) + '天前'
	}else if((time/(3600000*24*30)) < 12){
		return parseInt((time/(3600000*24*30))) + '月前'
	}else {
		return parseInt((time/(3600000*24*30*12))) + '年前'
	}
})

Vue.filter('tabFormatter', (post)=>{
	if(post.good === true){
		return '精华'
	}else if(post.top === true){
		return '置顶'
	}else if(post.tab === 'ask'){
		return '问答'
	}else if( post.tab === 'share'){
		return '分享'
	}else if( post.tab === 'job'){
		return '招聘'
	}
})
