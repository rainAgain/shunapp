<style lang="css" src="../style/home/home.css"></style>

<template lang="html">
  <div class="home">
    <left-sidebar></left-sidebar>
    <div class="main">
      count: {{count}}
      <div class="">
        <button @click="changeCount">clickme</button>
      </div>
    </div>
    <div class="right">
      right
    </div>
	</div>
</template>

<script>
  import LeftSidebar from '../components/home/leftSidebar.vue';
  import { mapGetters } from 'vuex';

  export default {
    data () {
      return {};
    },
    computed: {
      ...mapGetters([
        'count'
      ])
    },
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
      },
      changeCount () {
        this.$router.push('/index');
        //this.$store.dispatch('increaseCount', 4);
      }
    },
    components: {
      LeftSidebar
    }
  };
</script>
