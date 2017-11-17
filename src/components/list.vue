<template>
	<div class="list">
		<ul>
			
			<li><router-link to="/ping">商品</router-link></li>
			<li><router-link to="/liss">评价</router-link></li>
			<li><router-link to="/shan">商家</router-link></li>
		</ul>
		  <router-view></router-view>
	</div>
</template>

<script>
</script>

<style lang="scss" scoped>
	.list{
		ul{
			
			width: 100%;
			display: flex;
			list-style: none;
			border-bottom:1px solid gray ;
			li{
				width: 33.3%;
				height:0.8rem;
				line-height: 0.8rem;
				text-align: center;
				font-size: 0.28rem;
				color: #000000;
				font-weight: 200;
				a{
					text-decoration: none;
					color: #000000;
					font-weight: 200;
					
				}
				a:hover{
				  color: red;
				}
			}
		}
	}
</style>