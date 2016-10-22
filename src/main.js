//flexible 布局
import 'lib-flexible';

import Vue from 'vue';
//依赖一个 *.vue组件
import App from './views/App';

 //挂载Vue 根实例
new Vue({
  el: '#application',
  components: {
    app: App
  }
});
