var webpack =require('webpack');
var HtmlWebpackPlugin= require('html-webpack-plugin');
var postcss = require('postcss');
var precss = require('precss');
var pxtorem = require('postcss-pxtorem')({
    rootValue: 75,  //如果以750宽度视觉稿
    propWhiteList: []  //需要转换为rem的属性, []全部属性都转换
});

//开发环境配置
var config = {
  debug: true,
  watch: true,
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    //生成html插件
    new HtmlWebpackPlugin({
      title: '顺顺购',
      filename: 'index.html',
      template: 'src/index.html',
      inject: true
    }),
    //提取公共文件插件
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor'],
      minChunks: Infinity
    })
  ]
};

if (process.env.NODE_ENV === 'pro') { //生产环境
  config.debug = false;
  config.watch = false;
  config.devtool = 'cheap-module-source-map';
  //添加混淆插件
  config.plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,  //no warnings
      drop_console: true  //no console
    }
  }));
}

module.exports = {
	entry: {
    vendor: ['lib-flexible', 'es6-promise', 'vue', 'vue-router', 'vuex'],  //提出来，作为一个单独文件
    main: './src/main.js' //入口
  },
	//编译打包后的输出
	output: {
		path: __dirname+'/build/',
		filename: '[name].[hash].js'
	},

	debug: config.debug,

  //开发环境推荐：‘cheap-module-eval-source-map’，生产环境推荐：’cheap-module-source-map’
	devtool: config.devtool,
	module: {
		loaders: [
      {test: /\.(gif|jpg|png|woff|svg|eot|ttf)$/, loader: 'url-loader?limit=10000'}, //10kb
			{test: /\.js$/, loader: 'babel', exclude: /node_modules/},
			{test: /\.vue$/, loader:'vue'}
		]
	},
	resolve: {
		extensions: ['','.js','.vue','html'],
    alias: {
      vue: 'vue/dist/vue.js'
    }
	},
  vue: {
    postcss: [precss, pxtorem] // use custom postcss plugins
  },
	plugins: config.plugins,
	watch: config.watch
};
