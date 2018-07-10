<template>
	<div class="header">
		<img src="../assets/cnodejs_light.svg" alt="">
		<ul>
			<li>
				<a href="#">首页</a>
			</li>
			<li>
				<a href="#">新手入门</a>
			</li>
			<li>
				<a href="#">API</a>
			</li>
			<li>
				<a href="#">关于</a>
			</li>
			<li>
				<a href="#">注册</a>
			</li>
			<li>
				<a href="#">登录</a>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
 
}
</script>

<style scoped>

.header{
	background-color:#444444;
	height:50px;
	position:relative;
}
img{
	max-width:135px;
	margin:9px 0 15px 66px;
}
ul{
	position:absolute;
	bottom:0;
	right:0;
}
ul > li:not(:last-child){
	display:inline-block;
	padding:10px 10px 15px 10px;
}
ul > li:last-child{
	display:inline-block;
	padding-right:80px;
}
ul > li > a{
	text-decoration:none;
	color:#ccc;
	text-shadow:none;
	font-size:13px;
}
</style>
