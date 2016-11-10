//代码分割写法
const Home = resolve => {
  require.ensure(['./views/Home.vue'], () => {
    resolve(require('./views/Home.vue'));
  }, 'js/Home');  //最终打包为js文件夹下的Home.js文件
};

export default [
  { path: '/', component: Home },
  { path: '/index', component: Home }
];
