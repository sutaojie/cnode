<template>
	<div>
		<!-- 加载动画 -->
		<div class="loader-wrapper" v-if='isLoding'>
	 		<div class="rubik-loader"></div>
		</div>
		<div>
			<section>
				<img :src="userinfo.avatar_url" alt="">
				<span>{{userinfo.loginname}}</span>
				<p>
					{{userinfo.socre}}积分
				</p>
				<p>
					{{userinfo.create_at|formatDate}}
				</p>

			</section>
			<div>
				<p>回复的主题</p>
				<ul>
					<li v-for='item in userinfo.recent_replies'>
						<router-link :to='{name:"post_content",params:{id:item.id}}'>
							{{item.title}}
						</router-link>
					</li>
				</ul>
			</div>
			<div>
				<p>创建的主题</p>
				<ul>
					<li v-for="item in userinfo.recent_topics">
						<router-link :to="{name:'post_content',params:{id:item.id}}">
							{{item.title}}
						</router-link>
					</li>
				</ul>
			</div>
		</div>	
	</div>
</template>

<script>
export default {
	 data(){
 		return {isLoding:false,userinfo:{}}
 	},
 	methods:{
 		getUserInfo(){
 			this.$http.get(`https://cnodejs.org/api/v1/user/${this.$route.params.name}`)
 			.then(res=>{
 				if(res.data.success === true){
 				this.isLoding = false
 				this.userinfo = res.data.data
 				}
 			})
 			.catch(err=>console.log(err))
 		}
 	},
 	beforeMount(){
 		this.isLoding = true
 		this.getUserInfo()
 	}
}
</script>

<style scoped>
*{
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
