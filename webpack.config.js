/*
loaders of possible interest: sass-loader
*/
let path = require('path')
let CopyPlugin = require('copy-webpack-plugin')
let { CleanWebpackPlugin } = require('clean-webpack-plugin')
let host = 'localhost'
let port = 7777
module.exports = {
	entry: './client/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},
	devServer: {
		host,
		port,
		static: {
			publicPath: '/', // defaults to '/' anyway
			directory: path.join(__dirname, 'dist'),
		},
		open: {
			target: [`http://${host}:${port}`],
		},
		hot: true,
		client: {
			overlay: {
				errors: true,
				warnings: true,
			}
		},
	},
	plugins: [
		new CopyPlugin({
			patterns: [
				// { from: "client/style.css", to: "" }, // we are doing it a different way now with sass-loader etc
				{ from: "client/index.html", to: "" },
				{ from: "./client/assets", to: "assets" },
			]
		}),
		new CleanWebpackPlugin(),
	],
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [
					'style-loader', // injects css string into the dom
					'css-loader', // loads css into a string inside the bundled js file
					'sass-loader' // compiles sass into css
				],
			},
		],
	},
}