<template>
	<div class="app">
		<com-header></com-header>
		<com-main></com-main>
		<com-footer></com-footer>
	</div>
</template>

<script>
  import ComHeader from '../components/Header.vue';
  import ComFooter from '../components/Footer.vue';
  import ComMain from '../components/Main.vue' ;
  export default {
    components: {/*
  		ComponentA,
  		ComponentB,*/
      ComHeader,
      ComFooter,
      ComMain
    }
  };
</script>
