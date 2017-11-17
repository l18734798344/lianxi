<template>
		<div>
			<home-header></home-header>
		    <home-list></home-list>
		    <home-footer></home-footer>
		    
		     
		</div>
		
		
</template>

<script>
	import HomeHeader from "../components/header"
	import HomeList from "../components/list"
	import HomeFooter from "../components/footer"

	
	export default{
		components:{HomeHeader,HomeList,HomeFooter}
	}
    
	
</script>

<style>
</style>