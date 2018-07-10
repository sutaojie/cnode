import Vue from 'vue'
import Router from 'vue-router'
import Article from '../components/Article'
import PostList from '../components/PostList'
import Userinfo from '../components/Userinfo'
Vue.use(Router)

export default new Router({
  routes: [
  	{name:'root',path:'/',components:{ main: PostList}},
    {name:'post_content',path:'/topic/:id',components:{ main: Article}},
    {name:"user_info",path:'/userinfo/:name',components:{ main: Userinfo}}
  ]
})
