<style src="../style/home.scss"></style>

<template lang="html">
  <div class="home">
    <!--<left-sidebar></left-sidebar>
    <div class="main">
      count: {{count}}
      <div class="">
        <button @click="leftClick">leftClick</button>
        <button @click="goBack">back</button>
      </div>
    </div>
    <div class="right">
      right
    </div>-->
    <!-- <goods-list></goods-list> -->
    <Slider></Slider>
	</div>
</template>

<script>
  import LeftSidebar from '../components/home/leftSidebar.vue';
  import GoodsList from '../components/common/GoodsList.vue';
  import Slider from '../components/common/Slider.vue';

  import { mapGetters } from 'vuex';
  import mixin from '../mixin/index.js';

  export default {
    mixins: [mixin],
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
          url: 'http://127.0.0.1:4040/a',
          method: 'GET'
        };
        this.fetchApi(opts).then((data) => {
          console.log(data);
        });
      }
    },
    components: {
      LeftSidebar,
      GoodsList,
      Slider
    }
  };
</script>
