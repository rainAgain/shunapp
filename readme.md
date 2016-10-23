### 介绍

* 支持es6，及部分es7语法
* 支持promise
* 支持fetch
* vue+vue-router+vux
* webpack打包

#### 修改rem基准

修改web pack.config.js中的pxtorem配置

```javascript
var pxtorem = require('postcss-pxtorem')({
    rootValue: 75,  //rootValue等于视觉稿宽度除以10，如果以750宽度视觉稿,就是75
    propWhiteList: []  //需要转换为rem的属性, []全部属性都转换
});
```

#### 添加route

在`src/route-config.js`中添加对应的路由，对应的组件

```javascript
import Home from './views/Home.vue';
export default [
  { path: '/index', component: Home }
];
```

#### 添加action，mutations来修改store

1. 修改`src/store/index.js`中的state，添加想要缓存修改的值，比如叫count

   ```javascript
   import Vue from 'vue';
   import Vuex from 'vuex';
   import createLogger from 'vuex/dist/logger';

   import * as actions from './actions/index.js';
   import mutations from './mutations/index.js';

   Vue.use(Vuex);

   const state = {
     currentRoute: '/',
     count: 0,	//新增加的值
     pageData: {}
   };

   export default new Vuex.Store({
     state,
     actions,
     mutations,
     plugins: process.env.NODE_ENV !== 'production'
       ? [createLogger()]
       : []
   });

   ```

   ​

2. 在`src/store/actions`中添加对应页面的页面的文件夹，e.g. `src/veiws/home.vue`对应`src/store/actions/home`, 在文件夹中添加该页面的actions文件，比如叫`index.js`

```javascript
/*src/store/actions/home/index.js*/
export const increaseCount = ({ commit }, otherData) => {
  commit('INCREASE_COUNT', otherData);
};
```

3. 在`src/store/actions/index.js`文件中引入刚刚添加的actions 

```javascript
/*src/store/actions/index.js*/
import fetchApi from './fetchApi/fetchApi.js';
import * as home from './home/index.js'; //新增加的

export default {
  fetchApi,
  ...home //新增加的
};
```

4. 在`src/store/mutations`添加对应的文件夹文件`src/store/mutations/home/index.js`

   ```javascript
   /*src/store/mutations/home/index.js*/
   export const INCREASE_COUNT = (state, data) => {
     state.count = data;
   }; 
   ```

5. 同时在`src/store/mutations/index.js`引入刚刚新加的mutation

   ```javascript
   import * as fetchApi from './fetchApi/index.js';
   import * as home from './home/index.js'; //新增加的

   export default {
     ...fetchApi,
     ...home //新增加的
   };
   ```

6. 最后在组件中调用action

   ```javascript
   methods: {
     leftClick () {
       this.$store.dispatch('increaseCount', 4);
     }
   }
   ```



vue + webpack 的基础打包demo

1、npm(cnpm) install

2、开发环境 npm run dev

3、生产环境 npm run build
<!-- 以下是提示 -->

(1)package.json中 --host 127.0.0.1 --port 9090可以设置域名和端口
