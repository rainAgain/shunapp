### 介绍

* 支持es6，及部分es7语法
* 支持promise
* 支持fetch
* 移动端全尺寸适配
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

* 在`src/route-config.js`中添加对应的路由，对应的组件
* 使用代码分割的写法引入页面，实现路由懒加载

```javascript
const Home = resolve => require(['./views/Home.vue'], resolve); //代码分割写法

export default [
  { path: '/index', component: Home }
];
```

#### 如何添加action，mutations来修改store？

* 修改`src/store/index.js`中的state，添加想要缓存修改的值，比如叫count

```javascript
import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';

import actions from './actions/index.js';
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

* 在`src/store/actions`中添加对应页面js文件，e.g. `src/veiws/home.vue`对应`src/store/actions/home.js`

```javascript
/*src/store/actions/home.js*/
export const increaseCount = ({ commit }, otherData) => {
  commit('INCREASE_COUNT', otherData);
};
```

* 在`src/store/actions/index.js`文件中引入刚刚添加的actions

```javascript
/*src/store/actions/index.js*/
import fetchApi from './fetchApi/fetchApi.js';
import * as home from './home.js'; //新增加的

export default {
  fetchApi,
  ...home //新增加的
};
```

* 在`src/store/mutations`添加对应的文件夹文件`src/store/mutations/home.js`

```javascript
/*src/store/mutations/home.js*/
export const INCREASE_COUNT = (state, data) => {
  state.count = data;
};
```
* 同时在`src/store/mutations/index.js`引入刚刚新加的mutation

```javascript
import * as fetchApi from './fetchApi/index.js';
import * as home from './home.js'; //新增加的

export default {
  ...fetchApi,
  ...home //新增加的
};
```
* 最后在组件中调用action

```javascript
methods: {
  leftClick () {
    this.$store.dispatch('increaseCount', 4);
  }
}
```

#### 如何使用store的值?

* 修改`src/store/getters/index.js`添加函数，来获取你要的值

  ```javascript
  export const currentRoute = (state) => {
    return state.currentRoute;
  };

  export const count = (state) => {	//新增加的
    //do something alse with state
    return state.count; 	//or return state.count+1;
  };

  export const pageData = (state) => {
    return state.pageData;
  };
  ```

* 在组件中使用

  ```vue
  <template lang="html">
    <div class="main">
      count: {{count}}
      <div class="">
        <button @click="leftClick">clickme</button>
      </div>
    </div>
  </template>
  <script>
    import { mapGetters } from 'vuex';

    export default {
      computed: {
        ...mapGetters([
          'count'
        ])
      },
      methods: {
        leftClick () {
          this.$store.dispatch('increaseCount', 4);
        }
      }
    };
  </script>
  ```

#### mixin

* 在组件中添加mixin

  ```javascript
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
      }
    }
  ```

* 添加完后，组件会具有mixin中的方法，挂载在this上，可以通过`this.xxx()`直接调用。

#### mock data

*    启动本地服务器`npm run server`

*    在根目录下的`server.js`中添加假接口

     ```javascript
     var fake = require('local-fake');

     fake.get('/a', function(req) {
       /**
     * req: {
     *  method: request method
     *  url： request url
     *  query： request query
     *  body： json parameters
     *  header： request header
     * }
     */
     ```
    return req; //according req，do somthing to return the fake data you want
  });

  fake.post('/b', function(req) {
    return req;
  });

  fake.listen(4040);
  ```

  ​

#### 什么时候使用store，什么时候使用props？

props：当数据的变化总是发生在父级元素，并且影响子级元素，总是从上往下的时候

store：当数据的变化发生在某个元素，并且想要影响到兄弟元素，或者父级元素，或者其他不相干的元素的时候

#### 文件规范

* 遵循每个view在其他文件夹都有对应的 文件夹 e.g. `Home.vue`对应其他`home`文件夹，所有相关的文件都在对应的文件下
* 通用文件，放在对应的common文件夹下



vue + webpack 的基础打包demo

1、npm(cnpm) install

2、开发环境 npm run dev

3、生产环境 npm run build
<!-- 以下是提示 -->

(1)package.json中 --host 127.0.0.1 --port 9090可以设置域名和端口

  ```