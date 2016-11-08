<style src='vue-swipe/dist/vue-swipe.css'></style>
<style>
  .my-swipe {
    height: 200px;
    color: #fff;
    font-size: 30px;
    text-align: center;
  }

  .slide1 {
    background-color: #0089dc;
    color: #fff;
  }

  .slide2 {
    background-color: #ffd705;
    color: #000;
  }

  .slide3 {
    background-color: #ff2d4b;
    color: #fff;
  }
</style>

<template>
	<div>
		<swipe class="my-swipe">
      <swipe-item class="slide1">1</swipe-item>
      <swipe-item class="slide2">2</swipe-item>
      <swipe-item class="slide3">3</swipe-item>
    </swipe>
	</div>
</template>

<script type="text/javascript">

  import { Swipe, SwipeItem } from 'vue-swipe';

  export default {
    components: {
      Swipe,
      SwipeItem
    }
  };
</script>
