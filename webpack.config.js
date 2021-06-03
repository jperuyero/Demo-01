const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== "production";

const Assets = require("./src/assets");

module.exports = {
	entry: "./src/js/app.js",
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
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					devMode ? "style-loader" : MiniCssExtractPlugin.loader,
					"css-loader",
					"postcss-loader",
					"sass-loader",
				],
			},
		],
	},
	devServer: {
		contentBase: path.resolve(__dirname, "./"),
		publicPath: "/libs/JS/",
		compress: true,
		watchContentBase: true,
		open: true,
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
		new MiniCssExtractPlugin({
			filename: "../CSS/bundle.css",
		}),
	],
};
