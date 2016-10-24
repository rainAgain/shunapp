<style type="text/css">
	.footer{width: 100%;height: 120px;background-color: #222;color: #fff;}
</style>
<template>
	<footer class="footer">
		{{footer}}
	</footer>
</template>
<script type="text/javascript">
  export default {
    data() {
      return {
        footer: 'this is footer'
      };
    },
    methods: {
      get: function() {
        console.log('调用get方法');
      }
    },
    ready() {
      console.log('加载ready方法');
      console.log(this.footer);
      this.get();
    }
  };
</script>
