<!--<style lang="css" src="../style/home/home.css"></style>-->
<style scoped>
  .home {
    font-size: 20Px;
    width: 750px;
    .main {
      width: 550px;
      height: 600px;
      background: lightblue;
      float: left;
    }
    .right {
      width: 100px;
      height: 600px;
      background: lightpink;
      float: left;
    }
  }
</style>

<template lang="html">
  <div class="home">
    <left-sidebar></left-sidebar>
    <div class="main">
      main
    </div>
    <div class="right">
      right
    </div>
	</div>
</template>

<script>
  import LeftSidebar from './leftSidebar.vue'
  export default {
    data () {
      return {};
    },
    computed: {},
    mounted () {},
    methods: {
      leftClick () {
        const opts = {
          url: 'https://cnodejs.org/api/v1/topics',
          method: 'GET'
        };
        this.$store.dispatch('fetchApi', opts).then(() => {
          console.log('fetch success');
        });

        this.$store.dispatch('increaseCount', 4);
      }
    },
    components: {
      LeftSidebar
    }
  }
</script>
