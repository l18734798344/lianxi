<template>
	  <div>
	  	<div class="header_ping">
	  		<div class="header_ping_left">
	  			<div class="xia">
	  			<p>3.9</p>
	  			<p>综合评分</p>
	  			<p>高于周边商家69.2%</p>
	  			</div>
	  		</div>
	  		
	  		    <div class="header_ping_right">
	  			    <p> <span>服务态度 </span><img src="../resource/img/star24_on@2x.png"/>
	  			    <img src="../resource/img/star24_on@2x.png"/>
	  			    <img src="../resource/img/star24_on@2x.png"/>
	  			    <img src="../resource/img/star24_on@2x.png"/>
	  			    <img src="../resource/img/star24_off@2x.png"/>
	  			    <span>3.9</span>
	  			    </p>
	  			    
	  			    <p> <span>服务态度 </span><img src="../resource/img/star24_on@2x.png"/>
	  			    <img src="../resource/img/star24_on@2x.png"/>
	  			    <img src="../resource/img/star24_on@2x.png"/>
	  			    <img src="../resource/img/star24_on@2x.png"/>
	  			    <img src="../resource/img/star24_off@2x.png"/>
	  			    <span>3.9</span>
	  			    </p>
	  			     <p><span>发送时间</span><span>44分钟</span></p>
	  			    </div>
	  	</div>
	  	
	  	<div class="kong"></div>
	  	<div class="manyi">
	  		<span>全部57</span>
	  		<span>满意47</span>
	  		<span>不满意10</span>
	  	</div>
	  	
	  <div class="ping">
	  	<img src="../resource/img/star24_off@2x.png">
	  		<span>只看内容的评价</span>
	  	</div>
	  	
	 <div class="pingjia_zi" >
	 	<div class="pingjia_ziti" v-for="(l,index) in items">
	 	  <div class="pingjia_ziti_left">
	 	  	<div class="tuu"><img :src="l.avatar"></div>
	 	  </div>
	 	  <div class="pingjia_ziti_right">
	 	  <p><span>{{l.username}}</span> <span>{{l.rateTime}}</span></p>
	 	  <p>
	 		<img src="../resource/img/star24_on@2x.png"/>
	  		<img src="../resource/img/star24_on@2x.png"/>
	  		<img src="../resource/img/star24_on@2x.png"/>
	  		<img src="../resource/img/star24_on@2x.png"/>
	  		<img src="../resource/img/star24_off@2x.png"/>
	  		<span>{{l.deliveryTime}}分钟送到</span>
	 	</p> 
	 	  
	 	  <p>{{l.text}}</p>
	 	  <p>
	 	  	<span v-for="x in items[index].recommend">{{x}}</span>
	 	  </p>
	 	  
	 	  </div>
	 	 
	 	  
	 	  
	 	</div>
	 	
	 	
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
		a.$http.get('http://101.201.65.222:8056/ratings').then(function(data){
				a.items=data.data
				console.log(JSON.stringify(a.items))
				
			})
		}
	}
</script>

<style lang="scss" scoped>
*{
	margin: 0;
	padding: 0;
	list-style: none;
	
}
.header_ping{
	width: 100%;
	display: flex;
	
	
.header_ping_left{
	width:2.75rem;
	
	text-align:center;
	p:nth-of-type(1){
		font-size: 0.48rem;
		color: rgb(255,153,0);
		margin-top: 0.36rem;
	}
	p:nth-of-type(2){
		font-size: 0.24rem;
		color: rgb(7,17,27);
		margin-top: 0.12rem;
		font-weight: 200;
	}
	p:nth-of-type(3){
		font-size: 0.2rem;
		color: gray;
		margin: 0.16rem 0  0.36rem 0;
	}
	
}
.header_ping_right{
	width: 4.74rem;
	
	p{
		
		/*line-height: 0.36rem;*/
		display: flex;
		align-items: center;
		margin-top: 0.38rem;
		margin-left: 0.4rem;
		img{
			margin-left: 0.15rem;
		}
		span:nth-of-type(2){
			margin-left: 0.24rem;
			color: rgb(255,153,0);
			font-size:0.24rem ;
		}
		span:nth-of-type(1){
			font-size: 0.24rem;
		   font-weight: 200;
		}
	}
	p:nth-of-type(2){
		margin-top:0.16rem;
	}
	p:nth-of-type(3){
		margin-top:0.16rem;
		span:nth-of-type(2){
			color: gray;
		}
	}
}	
}
.xia{
	border-right:1px solid gray ;
}
.kong{
	width: 100%;
	height:0.6rem;
	background-color:gainsboro;
	border-bottom: 1px solid grey;
	border-top:1px solid grey ;
}
.manyi{
	width: 100%;
	display: flex;
	border-bottom:1px solid gray;
	span:nth-of-type(1){
		padding: 0.2rem;
		font-size: 0.24rem;
		background-color:cornflowerblue;
		margin-left: 0.35rem;
		margin-top: 0.36rem;
		margin-bottom: 0.36rem;
	}
	span:nth-of-type(2){
		padding: 0.2rem;
		font-size: 0.24rem;
		background-color: aquamarine;
		margin-left: 0.2rem;
		margin-top: 0.36rem;
		margin-bottom: 0.36rem;
		
	}
	span:nth-of-type(3){
		padding: 0.2rem;
		font-size: 0.24rem;
		background-color:gainsboro;
		margin-left: 0.2rem;
		margin-top: 0.36rem;
		margin-bottom: 0.36rem;
	
	}
}
.ping{
	display: flex;
	line-height: 0.8rem;
	align-items: center;
	border-bottom:1px solid gray;
	span{
		font-size: 0.24rem;
		color: gray;
	}
	img{
		margin-left: 0.36rem;
	}
	
}
.pingjia_ziti{
	width: 100%;
	display: flex;
	margin-top: 0.36rem;
	.pingjia_ziti_left{
		width:18%;
		
		.tuu{
			width:0.56rem;
			height: 0.56rem;
			display: flex;	
			margin-left: 0.36rem;
			
			img{
				width: 100%;
				height: 100%;
				border-radius:8px;
				
			}
		}
	}
	.pingjia_ziti_right{
		width: 81%;
		
		font-size:0.24rem ;
		p:nth-of-type(1){
			display: flex;
			justify-content: space-between;
			font-size: 0.2rem;
			font-weight: 200;
			span:nth-of-type(2){
				margin-right: 0.36rem;
			}
		}
		p:nth-of-type(2){
			display: flex;
			font-size: 0.2rem;
			font-weight: 200;
			margin-top: 0.08rem;
			line-height:0.3rem ;
			img{
				width: 0.3rem;
				height: 0.3rem;
			}
			span{
				font-size: 0.2rem;
				color: gray;
				font-weight: 200;
				margin-left: 0.12rem;
			}
		}
		p:nth-of-type(3){
			margin-top: 0.12rem;
			font-size:0.24rem;
			color: rgb(7,17,27);
		}
		p:nth-of-type(4){
			margin-top: 0.12rem;
			font-size:0.24rem;
			color: rgb(7,17,27);
			display: flex;
			box-sizing: border-box;
			span{
				border: 1px solid gray;
				
				margin-right: 0.1rem;
			}
		}
		
	}
}
</style>