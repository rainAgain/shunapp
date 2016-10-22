var webpack =require('webpack');
var HtmlWebpackPlugin= require('html-webpack-plugin');
var postcss = require('postcss');
var precss = require('precss');
var pxtorem = require('postcss-pxtorem')({
    rootValue: 75,  //如果以750宽度视觉稿
    propWhiteList: []  //需要转换为rem的属性, []全部属性都转换
});

module.exports = {
	//应用的入口
	entry:'./src/main.js',
	//编译打包后的输出
	output:{
		path:__dirname+'/build/',
		filename:'[name].[hash].js'
	},
	debug:true,
	devtool:"source-map",
	module:{
		loaders:[
      {test: /\.(gif|jpg|png|woff|svg|eot|ttf)$/, loader: 'url-loader?limit=50000'},
			{test: /\.js$/, loader: 'babel', exclude: /node_modules/},
			{test: /\.vue$/, loader:'vue'}
		]
	},
	resolve:{
		extensions:['','.js','.vue','html'],
	},
  vue: {
    postcss: [precss, pxtorem] // use custom postcss plugins
  },
	plugins:[
		new HtmlWebpackPlugin({
      title:'爽爽购',
			filename:'index.html',
			template:'src/index.html',
			inject: true
		})
	],
	watch:true //观察者模式每次修改保存webpack.config.js中引用文件，bundle.js的文件会自动更新
};
