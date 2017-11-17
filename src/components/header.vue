<template>
	<div >
		<div class="toumaing">
			
		
		<div class="header">
		    <div class="header_left"><img :src="items.avatar"/></div> 
		    <div class="header_centent">
		    <div><img src="../resource/img/brand@2x.png"><span>{{items.name}}</span></div>
		    <div>{{items.description}}/<span>38分钟到达</span></div>
		    <div><img src="../resource/img/decrease_1@2x.png"/><span>{{items.supports[0].description}}</span></div>
		    </div>
		    
		    <div class="header_rigth">
		    	<span @click="open()">5个 ></span>
		    </div>
		  </div>
	  
		 <div class="header_bottom">
		 	<img src="../resource/img/bulletin@2x.png"/>
		 	<p <marquee>{{items.bulletin}}</marquee></p>
		 	<span style="margin-right: 0.2rem;">></span>
		 </div> 
	  
	  <div class="lll">
	  	<p>{{items.name}}</p>
	  	<p>
	 		<img src="../resource/img/star24_on@2x.png"/>
	  		<img src="../resource/img/star24_on@2x.png"/>
	  		<img src="../resource/img/star24_on@2x.png"/>
	  		<img src="../resource/img/star24_on@2x.png"/>
	  		<img src="../resource/img/star24_off@2x.png"/>
	  		
	 	</p> 
	 	 <p>优惠信息</p>
	 	 <p><img src="../resource/img/decrease_1@2x.png"/> 在线支付满28减5</p>
	 	 <p><img src="../resource/img/discount_1@2x.png"> 单人精彩赛</p>
	 	 <p><img src="../resource/img/discount_1@2x.png"> 清肺雪梨8折抢购</p>
	 	 <p><img src="../resource/img/special_1@2x.png"> 特价饮品八折抢购</p>
	 	 <p><img src="../resource/img/special_1@2x.png"/> 单人特色套餐</p>
	 	 <p>优惠信息</p>
	 	 <p>{{items.bulletin}}</p>
	  	<button @click="btn()">✘</button>
	  	
	  	 
	  </div>
	  </div>
	  
</div>	
</template>

<script>
	import axios from 'axios'
	import $ from 'jquery'
	export default{
		
		data(){
			return{
				items:[]
			}
		},
		methods:{ 
			btn:function(){
				$(".lll").toggle()
			},
			open:function(){
				$(".lll").toggle()
			}
		},
		created(){
			var a= this;
			a.$http.get('http://101.201.65.222:8056/seller').then(function(data){
				a.items=data.data
				console.log(a.items)
				
			})
//			var a= this;
//			a.$http.get('http://172.16.133.43:8056/goods').then(function(data){
//				a.items=data.data
//				console.log(a.items)
//			})
//			var a= this;
//			a.$http.get('http://172.16.133.43:8056/ratings').then(function(data){
//				a.items=data.data
//				console.log(a.items)
//			})
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

<style lang="scss" scoped>
 *{
 	margin: 0;
 	padding: 0;
 }
 .lll{
 	display: none;
 	width: 100%;
 	height: 107%;
 	background-color:rgba(7,17,27,0.8);
 	z-index: 999;
 	position: absolute;/*top: -10%;*/
 	p{
 		font-size:0.32rem;
 		color: white;
 		text-align: center;
 		margin-top: 0.5rem;
 	}
 	p:nth-of-type(4){
 		line-height:0.3rem;
 		display: flex;
 		align-items: center;
 		margin-left: 1rem;
 	}
 	p:nth-of-type(5){
 		line-height:0.3rem;
 		display: flex;
 		align-items: center;
 		margin-left: 1rem;
 	}
 	p:nth-of-type(6){
 		line-height:0.3rem;
 		display: flex;
 		align-items: center;
 		margin-left: 1rem;
 	}
 	p:nth-of-type(7){
 		line-height:0.3rem;
 		display: flex;
 		align-items: center;
 		margin-left: 1rem;
 	}
 	p:nth-of-type(8){
 		line-height:0.3rem;
 		display: flex;
 		align-items: center;
 		margin-left: 1rem;
 	}
 	p:nth-of-type(10){
 		
 		
 		
 		margin:1rem 1rem;
 		
 	}
 	button{
 		text-align:center;
 		display: flex;
 		display: block;
 	}
 }
 
 .toumaing{
 	background: url(http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg);
 	overflow: hidden;
 	
 	z-index:11;
 	
   .header_bottom{
   	float: left;
   	
   	display: flex;
   	width: 100%;
 	background-color:rgba(7,17,27,0.8);
 	height:0.56rem;
 	font-size: 0.2rem;
 	/*flex-wrap:200;*/
 	color: white;
 	line-height:0.56rem;
 	/*overflow: hidden;*/
 	white-space: nowrap;
    text-overflow: ellipsis;
    align-items: center;
     img{
     	width: 0.6rem;
     	height: 0.4rem;
     	margin-left: 0.24rem;
     }
     
    p{
    	margin-left: 0.08rem;
    	font-weight:200;
    	white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    	
    }
    
 }
 }
 
.header{
	width: 100%;
	float: left;
	/*height: 200px;*/
	z-index: 20;
	background-size: 100%;
	background-color:rgba(7,17,27,0.6);
	overflow: hidden;
	display: flex;

	.header_left{
	width: 1.28rem;
	height:1.28rem;
	margin-top: 0.48rem;
	margin-left: 0.48rem;
	
	img{
		width: 100%;
		height: 100%;
	}
}
.header_centent{
	font-size:0.32rem;
	color: white;
	font-weight:bold;
	margin-top: 0.48rem;
	margin-left: 0.32rem;
	div:nth-of-type(1){
		display: flex;
		align-items: center;
		img{
		width:0.6rem;
		height:0.4rem;
		}
		span{
			margin-left: 0.12rem;
		}
	}
	div:nth-of-type(2){
		font-size:0.24rem;
		margin-top: 0.16rem;
	}
	div:nth-of-type(3){
		font-size:0.2rem;
		margin-top: 0.14rem;
		 margin-bottom: 0.36rem;
		display: flex;
		align-items: center;
		img{
			width: 0.3rem;
			height: 0.3rem;
		}
	}
}
.header_rigth{
	font-size:0.2rem;
	color: white;
	
	span{
		padding: 0.14rem 0.16rem;
		background-color:rgba(0,0,0,0.2);
		border-radius:10px ;
		font-size: 0.2rem;
		font-weight: 200;
		margin-left: 0.5rem;
		margin-top: 1.3rem;
		display: block;
	}
}

}

</style>