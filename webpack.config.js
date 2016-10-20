var HtmlWebpackPlugin= require('html-webpack-plugin');

module.exports = {
	//应用的入口
	entry:'./main.js',
	//编译打包后的输出
	output:{
		path:__dirname+'/build/',
		filename:'[name].[hash].js'
	},
	debug:true,
	devtool:"source-map",
	module:{
		loaders:[
			{
				 test: /\.js$/,
				 loader: 'babel',
				 exclude: /node_modules/
			},
			{
				test:/\.vue$/,//正则匹配所有以 `.vue` 结尾的文件
				loader:'vue' // 对匹配到的文件使用何种 loader
			}/*,
			{ 
				test: /\.css$/,
				exclude: /\.useable\.css$/, 
				loader: "style!css" 
			},
			{ 
				test: /\.useable\.css$/, 
				loader: "style/useable!css" 
			}*/
		]
	},
	/*vue:{
		loaders:{
			js:'babel'
		}
	},*/
	resolve:{
		extensions:['','.js','.vue','html'],
	},
	plugins:[
		new HtmlWebpackPlugin({
			filename:'./index.html',
			inject:'body',
			template:'index.html_vm',
			favicon:'favicon.ico',
			hash:false
		})
	],
	watch:true //观察者模式每次修改保存webpack.config.js中引用文件，bundle.js的文件会自动更新
}