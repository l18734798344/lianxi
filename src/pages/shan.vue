<template>
	<div>
		<div class="header">
			<div class="header_div">
				<div class="header_div_left">
			     <p><span>{{items.name}}</span></p>
			      <p>  
			   	    <img src="../resource/img/star24_on@2x.png"/>
	  			    <img src="../resource/img/star24_on@2x.png"/>
	  			    <img src="../resource/img/star24_on@2x.png"/>
	  			    <img src="../resource/img/star24_on@2x.png"/>
	  			    <img src="../resource/img/star24_off@2x.png"/>
	  			    <span>(661)</span>
	  			    <span>月售690单</span>
	  			   </p>
			  </div>
			  
			  <div class="header_div_right">
			  	<p>❤</p>
			  	<p>已收藏</p>
			  </div>
			</div>
		</div>
		
	  <div class="nav">
	  	      <ul>
	  	      	<li>
	  	      		<p>起送价</p>
	  	      		<p><b>{{items.minPrice}}</b>元</p>
	  	      	</li>
	  	      	<li>
	  	      		<p>商家配送</p>
	  	      		<p><b>{{items.deliveryPrice}}</b>元</p>
	  	      	</li>
	  	      	<li>
	  	      		<p>平均配送时间</p>
	  	      		<p><b>{{items.deliveryTime}}</b>元</p>
	  	      	</li>
	  	      </ul>
	  </div>
		
		<div class="kong"></div>
		<div class="gonggao">
			<h2>公告与活动</h2>
			<p>{{items.bulletin}}</p>
		</div>
		
		<div class="dazhe">
			<ul>
				<li v-for="x in items.supports">{{x.description}}</li>
			</ul>
		</div>
		
		<div class="tu">
			<h2>商家实景</h2>
			<div class="tupian"><img v-for="d in items.pics" :src="d"/></div>
		</div>
		
		<div class="footer">
			<h2>商家信息</h2>
			<ul>
				<li v-for="i in items.infos">{{i}}</li>
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
			a.$http.get('http://101.201.65.222:8056/seller').then(function(data){
				a.items=data.data
				console.log(a.items)
				
			})
		}
	}
	document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 + 'px';
			window.onload=function(){
			onresize=function(){
				document.documentElement.style.fontSize = document.documentElement.clientWidth/7.5 + 'px';
				document.documentElement.style.fontSize = document.documentElement.clientWidth/7.5 + 'px';
				console.log("1rem="+document.documentElement.clientWidth / 7.5 + 'px');
			}
		}
</script>

<style lang="scss" scoped="scoped">
*{
	margin: 0;
	padding: 0;
	list-style: none;
}
.kong{
	width: 100%;
	height: 0.5rem;
	background-color: gainsboro;
	border-bottom: 1px solid gray;
	border-top: 1px solid gray;
	margin-top: 0.36rem;
	
}
.header{
	width: 100%;
	box-sizing: border-box;
	
	.header_div{
		width: auto;
		margin: 0.36rem;
		border-bottom:1px solid gray ;
		box-sizing: border-box;
		display:flex;
		justify-content:space-between;
		
	    .header_div_left{
		   p:nth-of-type(2){
			display: flex;
			margin-top: 0.16rem;
			line-break: 0.2rem;
			display:flex;
			align-items: center;
			margin-bottom: 0.36rem;
		
			span{
				font-size: 0.24rem;
				margin:0rem 0.2rem;
			}
		}
		 p:nth-of-type(1){
		 	span{
		 		display: flex;
			    font-size: 0.24rem;
		 	}
		 	
			
		}
	}
	.header_div_right{
		p:nth-of-type(1){
			font-size: 0.5rem;
			color: red;
			text-align: center;
		}
		p:nth-of-type(2){
			font-size: 0.24rem;
			
		}
		
	}	
	}
}

.nav{
	width: 100%;
	  ul{
		width: 100%;
		display: flex;
		justify-content: space-around;
		
		  li{
			width: 33%;
			text-align: center;
			font-size: 0.24rem;
			b{
				font-size: 0.48rem;
			}
		}
		
	}
}
.gonggao{
	width: 100%;
	h2{
		font-size: 0.3rem;
		margin:0.36rem 0rem 0.16rem 0.36rem;
	}
	p{
		font-size: 0.24rem;
		margin: 0rem 0.4rem 0rem 0.4rem;
		font-weight: 200;
		color: red;
	}
}

.dazhe{
	width: 100%;
	
	margin-top: 0.32rem;
	ul{width: 95%;
	  margin-left: 0.25rem;
	  
		li{
			width: 95%;
			border-bottom: 1px solid gray;
			border-top: 1px solid gray;
			
			font-size: 0.24rem;
			padding: 0.3rem 0rem;
		}
	}
}
.tu{
	width: 100%;
	overflow: hidden;
	
	h2{
		font-size: 0.3rem;
		margin:0.36rem 0rem 0.16rem 0.36rem;
	}
	.tupian{
		width: 100%;
		margin-left: 0.36rem;
	    float: left;
		height: 1.8rem;
		overflow: hidden;
		    img{
			width: 2.4rem;
			height: 1.8rem;
			margin-right:0.1rem;
		}
	}
	
}

.footer{
	width: 100%;
	margin-top: 0.32rem;
	ul{width: 95%;
	  margin-left: 0.25rem;
	  
		li{
			width: 95%;
			border-bottom: 0.5px solid gray;
			border-top: 1px solid gray;
			
			font-size: 0.24rem;
			padding: 0.3rem 0rem;
		}
	}
	h2{
		font-size: 0.3rem;
		margin:0.36rem 0rem 0.16rem 0.36rem;
	}
}
 </style>