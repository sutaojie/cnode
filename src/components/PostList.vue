<template>

<div>
	<!-- 加载动画 -->
	<div class="loader-wrapper" v-if='isLoding'>
 		<div class="rubik-loader"></div>
	</div>
	<!-- 加载列表 -->
	<div>
		<ul>
			<li v-for='post in posts'>
				<router-link :to="{name:'user_info',params:{name:post.author.loginname}}">
				<img :src='post.author.avatar_url' alt="">
				</router-link>
				<span>
					<span class="reply_count">{{post.reply_count}}</span>
					/<span class="visit_count">{{post.visit_count}}</span>
				</span>
				<span :class="[{put_good:(post.good===true),put_top:(post.top===true),'topiclist-tab':(post.good!==true && post.top!==true)}]">
					<span>
						{{post | tabFormatter}}
					</span>
				</span>
				<router-link :to="{name:'post_content',params:{
				id:post.id
			}}">
					<span>
						{{post.title}}
					</span>
				</router-link>
				<span class="replytime">
					{{post.last_reply_at | formatDate}}
				</span>
			</li>
		</ul>
	</div>
</div>
</template>

<script>
export default {
 	data(){
 		return {
 			isLoding:false,
 			posts:[]
 		}
 	},
 	methods:{
 		getData(){
 			let url = 'https://cnodejs.org/api/v1/topics'
 			this.$http.get(url,{
 				page:1,
 				limit:20
 			})
 			.then(res=>{
 				this.isLoding = false
 				this.posts = res.data.data
 				console.log(res.data.data);
 			})
 			.catch(err=>console.log(err))
 		}
 	},
 	beforeMount(){
 		this.isLoding = true
 		this.getData()
 	}
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.loader-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.rubik-loader {
  width: 64px;
  height: 64px;
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  background-image: url(http://i.giphy.com/3og0ISeflb7vrNzy2A.gif);
  background-repeat: no-repeat;
  background-position: center;
}
img{
	width:40px;
}
.reply_count{
	color:#9EA2DB;
}
.visit_count{
	color:#E4CABA;
}
.replytime{
	float:right;
}
</style>
