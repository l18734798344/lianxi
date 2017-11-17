<template>
	<div>
		<div class="footer">
			<span @click="open()">图</span>
			<span>￥0</span>
			<span>另需配送费￥4元</span>
			<span>20起送</span>
			
		</div>
		
		<div class="xiannima">
			<div class="nima">
				<ul>
					<li><span>购物车</span> <span>清空</span></li>
					<li><span>莲子核桃黑米粥</span><div><span>￥10</span>
						<span>-</span>
						<span>1</span>
						<span>+</span>
					</div></li>
					<li><span>莲子核桃黑米粥</span><div><span>￥10</span>
						<span>-</span>
						<span>1</span>
						<span>+</span>
					</div></li>
					<li><span>莲子核桃黑米粥</span><div><span>￥10</span>
						<span>-</span>
						<span>1</span>
						<span>+</span>
					</div></li>
					<li><span>莲子核桃黑米粥</span><div><span>￥10</span>
						<span>-</span>
						<span>1</span>
						<span>+</span>
					</div></li>
				</ul>
				
				 <div class="ppp"><button @click="btn()">X</button></div>
			</div>
			
		</div>
	</div>
</template>

<script>
    import $ from 'jquery'
	export default{
	methods:{ 
			btn:function(){
				$(".xiannima").toggle()
			},
			open:function(){
				$(".xiannima").toggle()
			}
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
  	list-style: none;
  }

.xiannima{
	width: 100%;
	height: 100%;
	position: absolute;bottom: 1.16rem;
	background-color:rgba(7,17,27,0.8);
	z-index: 99999;
	float: left;
	display: none;
      .nima{
	width: 100%;
	height: 6rem;
	background-color: white;
	margin-top: 7.3rem;
	  ul{
	 	width: 100%;
	 	
	 	  li{
	 		width: 100%;
	 		height: 0.8rem;
	 		line-height: 0.8rem;
	 		display: flex;
	 		font-size: 0.28rem;
	 		justify-content: space-between;
	 		border-bottom: 1px solid gray;
	 		
	 	}
	 	li:nth-of-type(1){
	 	   span{
	 			font-size:0.28rem;
	 			margin:0rem 0.36rem ;
	 		}
	 	   span:nth-of-type(2){
	 			font-size:0.28rem;
	 			color: blue;
	 		}
	 	}
	 	
	 	li:nth-of-type(2){
	 		span:nth-of-type(1){
	 			font-size:0.28rem;
	 			margin:0rem 0.36rem ;
	 		}
	 		div{
	 			margin-right: 0.36rem;
	 			span:nth-of-type(1){
	 				font-size:0.28rem;
	 				color: red;
	 			}
	 			span:nth-of-type(2){
	 				width: 0.3rem;
	 				height: 0.3rem;
	 				border-radius:50%;
	 				color: blue;
	 			}
	 		}
	 	}
	 	li:nth-of-type(3){
	 		span:nth-of-type(1){
	 			font-size:0.28rem;
	 			margin:0rem 0.36rem ;
	 		}
	 		div{
	 			margin-right: 0.36rem;
	 		}
	 	}
	 	li:nth-of-type(4){
	 		span:nth-of-type(1){
	 			font-size:0.28rem;
	 			margin:0rem 0.36rem ;
	 		}
	 		div{
	 			margin-right: 0.36rem;
	 		}
	 	}
	 	li:nth-of-type(5){
	 		span:nth-of-type(1){
	 			font-size:0.28rem;
	 			margin:0rem 0.36rem ;
	 		}
	 		div{
	 			margin-right: 0.36rem;
	 		}
	 	}
	 }
}	
	 .ppp{
	 	width: 100%;
	 	 text-align: center;
	 	
	 	 button{
	  	text-align: center;
	  	margin-top: 0.3rem;
	  	
	  	
	  	}
	 }
}
.footer{
	width: 100%;
	height: 1.16rem;
	background-color: #141d27;
	/*line-height: 1.16rem;?*/
	display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    bottom: 0;
    
	 span:nth-of-type(1){
		width: 0.88rem;
		height:0.88rem;
		border-radius:50%;
		font-size: 0.5rem;
		color: white;
		text-align: center;
		line-height: 0.88rem;
		
		
	}
	span:nth-of-type(2){
		font-size: 0.24rem;
		color: white;
		line-height: 1.16rem;
	}
	span:nth-of-type(3){
		font-size: 0.24rem;
		color: white;
		line-height: 1.16rem;
		
	}
	span:nth-of-type(4){
		font-size: 0.24rem;
		width: 2.1rem;
		height:1.16rem;
		background:rgba(255,255,255,0.4);
		text-align: center;
		line-height: 1.16rem;
		
		color: white;
	}
}

</style>