const Home = resolve => require(['./views/Home.vue'], resolve); //代码分割写法

export default [
  { path: '/', component: Home },
  { path: '/index', component: Home }
  ,{path: '/404', component: Notfound}
];
