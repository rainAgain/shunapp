<style scoped>
  .left-sidebar{

    width: 100px;
    height: 600px;
    background: lightgray;
    float: left;
  }
</style>

<template>
  <section class="left-sidebar">{{content}}</section>
</template>

<script>
  export default{
    data() {
      return {
        content: 'left side bar'
      }
    }
  }
</script>
