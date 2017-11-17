<template>
	 <div class="name">
	 	<div class="menu-wrapper">
	 		<ul>
	 			<li v-for="m in items">
	 				<span class="title">{{m.name}}</span>
	 			</li>
	 		</ul>
	 	</div>
	 	<div class="list-wrapper">
	 		<ul>
	 			<li v-for="m in items" class="wai_li">
	 				<h1 class="list_h1"><span>{{m.name}}</span></h1>
	 				<aside class="list_nei" v-for="food in m.foods">
	 					<li>
	 						<div class="left">
	 							<img :src="food.icon">
	 						</div>
	 						<div class="right">
	 							<h2>{{food.name}}</h2>
	 							<span class="xian">{{food.description}}</span>
	 							<div class="yue">
	 								<span>月售{{food.sellCount}}份</span>
	 								<span>好评率{{food.rating}}</span>
	 							</div>
	 							<div class="right_bo">
	 								<div class="money">
		 								<span>￥<b>{{food.price}}</b></span>
		 								<s>{{food.oldPrice}}</s>
	 								</div>
	 								<div class="hao">
	 									<span>-</span>
	 									<p>1</p>
	 									<span>+</span>
	 								</div>
	 							</div>
	 						</div>
	 					</li>
	 				</aside>
	 			</li>
	 		</ul>
	 	</div>
	 </div>
</template>


<script>
	import axios from 'axios'
	export default{
		
		data(){
			return{
				items:[]
			}
		},
		created(){
			var a= this;
			a.$http.get('http://101.201.65.222:8056/goods').then(function(data){
				a.items=data.data
				console.log(a.items)
				
			})
		}
	}
	
</script>


<style lang="scss" scoped>
	.title:hover{
		background-color: white;
	}
	.name{
		display: flex;
		position: relative;
		position: relative;
		.menu-wrapper
		{
			width: 1.6rem;
			height: 8rem;
			overflow:auto;
			
			ul
			{
				width: 100%;
				display: flex;
				flex-direction: column;
				list-style: none;
				height: 10rem;
				li
				{
					display: flex;
					text-align: center;
					background: #f3f5f7;
					flex-direction: column;
					height: 1.08rem;
					line-height: 1.08rem;
					font-size: 0.24rem;
					border-bottom: 1px solid lightgray;
					list-style: none;
				}
			}
		}
		.list-wrapper{
			width: 100%;
			display: flex;
			flex-direction: column;
			height:8rem;
			overflow:auto;
			
			
			ul{
				display: flex;
				flex-direction: column;
				list-style: none;
				height: 10rem;
				
				
				.wai_li{
					.list_h1{
						width:auto;
						
						background: #f5f3f7;
						line-height: 0.52rem;
						font-size: 0.24rem;
						color: rgb(147,163,159);
						border-left: 2px solid #d9dde1;
						span{
							margin-left: 0.16rem;
						}
					}  
					.list_nei{
						li{
						display: flex;
						height: 2.1rem;
						padding: 0.36rem;
						box-sizing: border-box;
						.left{
							img{
								width: 1.15rem;
								height: 1.15rem;
							}
						}
						.right{
							margin-left: 0.2rem;
							 h2
							{
								line-height: 0.28rem;
								font-size: 0.28rem;
							}
							.xian{
								
								box-sizing: border-box;
								font-size: 0.2rem;
								color: rgb(147,153,159);
								display: block;
								overflow: hidden;
								margin: 0.16rem 0;
							}
							.yue{
								display: flex;
								font-size: 0.2rem;
								color: rgb(147,153,159);
								span{
									padding: 0 0.24rem 0 0;
									box-sizing: border-box;
									display: block;
								}
							}
							.right_bo{
								display: flex;
								margin-top: 0.16rem;
								.money{
									     
									span{
										font-size: 0.2rem;
										color: red;
										display: block;
										
										box-sizing: border-box;
										b{
											font-size: 0.28rem;
											color: red;
										}
									}
									s{
										font-size: 0.2rem;
										color: rgb(147,153,159);
									}
								}
								.hao{
									padding: 0 0 0 2rem;
									display: flex;
									span{
										display: inline-block;
										width: 0.4rem;
										height: 0.4rem;
										background: rgb(0,160,220);
										border-radius: 50%;
										text-align: center;
										line-height: 0.4rem;
										color: white;
									}
									p{
										font-size: 0.2rem;
										color: rgb(147,153,159);
										padding: 0 0.24rem;
									}
								}
							}
							
						}
						}
					}
				}
			}
		}
	}
	.menu-wrapper::-webkit-scrollbar {display:none}
	.list-wrapper::-webkit-scrollbar {display:none}
		
	
</style>