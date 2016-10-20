<style type="text/css">
	.main{
		min-height: 800px;
		background-color: #eee;
	}
	.clear{overflow: hidden;}
	.nav{background-color: #fff;color: #000;}
</style>
<template>
	<div class="main">
		<div class="nav">
			
			{{content}}
		</div>
		<div class="clear">
			<main-left></main-left>
			<main-right></main-right>

		</div>
	</div>
</template>
<script type="text/javascript">

import MainLeft from './main-left.vue'
import MainRight from './main-right.vue'

	export default {
		components:{
			MainLeft,
			MainRight
		},
		data(){
			return {
				content:'this is main content'
			}
		}
	}
</script>