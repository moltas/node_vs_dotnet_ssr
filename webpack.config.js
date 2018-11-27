const path = require('path');

module.exports = {
	mode: 'development',
	entry: {
		client: './react-app/src/client-root.js',
		server: './react-app/src/server-root.js'
	},
	output: {
		path: path.resolve(__dirname, 'react-app/dist'),
		filename: 'bundle.[name].js'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				options: {
					presets: ['@babel/preset-env', '@babel/preset-react'],
				},
			},
		]
	}
};