<template>
	<div class="app">
		<com-header></com-header>
		<com-main></com-main>
		<com-footer></com-footer>
	</div>
</template>

<script>
	import ComHeader from './Header.vue'
	import ComFooter from './Footer.vue'
	import ComMain from './Main.vue'
	export default {
		components:{/*
			ComponentA,
			ComponentB,*/
			ComHeader,
			ComFooter,
			ComMain
		}
	}
</script>