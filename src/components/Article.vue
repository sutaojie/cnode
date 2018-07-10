<template>
	<div>
		<!-- 加载动画 -->
		<div class="loader-wrapper" v-if='isLoding'>
 			<div class="rubik-loader"></div>
		</div>
		<div v-else>
			<div>
				<div>
					{{post.title}}
				</div>
				<ul>
					<li>发布于：{{post.create_at|formatDate}}</li>
					<li>作者：{{post.author.loginname}}</li>
					<li>{{post.visit_count}}次浏览</li>
					<li>来自：{{post | tabFormatter}}</li>
				</ul>
				<div v-html='post.content'></div>
				<div>
					<div>回复</div>
					<div v-for="(reply, index) in post.replies">
						<router-link :to='{name:"user_info", params:{
						name:reply.author.loginname
					}}'>
							<img :src="reply.author.avatar_url" alt="">
						</router-link>
						<router-link :to='{name:"user_info", params:{
						name:reply.author.loginname
					}}'>
							<span>{{reply.author.loginname}}</span>
						</router-link>
						<span>{{index + 1}}楼</span>
						<span v-if="reply.ups.length>0">{{reply.ups.length}}</span>
						<p v-html="reply.content"></p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
 	data(){
 		return {isLoding:false,post:{}}
 	},
 	methods:{
 		getAritcleData(){
 			console.log(2);
 			this.$http.get(`https://cnodejs.org/api/v1/topic/${this.$route.params.id}`)
 			.then(res=>{
 				if(res.data.success === true){
 				this.isLoding = false
 				this.post = res.data.data
 				}
 			})
 			.catch(err=>console.log(err))
 		}
 	},
 	beforeMount(){
 		this.isLoding = true
 		this.getAritcleData()
 		console.log(2);
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



</style>
