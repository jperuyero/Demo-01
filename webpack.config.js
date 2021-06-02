const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");
const Assets = require("./src/assets");

module.exports = {
	entry: "./src/js/index.js",
	output: {
		path: path.resolve(__dirname, "libs/JS"),
		filename: "bundle.js",
	},
	module: {
		rules: [
			{
				test: /\.js$/i,
				include: path.resolve(__dirname, "src"),
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"],
					},
				},
			},
		],
	},
	devServer: {
		contentBase: path.resolve(__dirname, "./"),
		watchContentBase: true,
		hot: true,
	},
	plugins: [
		new CopyPlugin(
			{
				patterns: Assets.JS.map((asset) => {
					return {
						from: path.resolve(__dirname, `./node_modules/${asset}`),
						to: path.resolve(__dirname, "libs/JS"),
					};
				}),
			},
			{
				patterns: Assets.CSS.map((asset) => {
					return {
						from: path.resolve(__dirname, `./node_modules/${asset}`),
						to: path.resolve(__dirname, "libs/CSS"),
					};
				}),
			}
		),
	],
};
