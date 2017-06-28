// @flow
const path = require('path');

const rootDir = path.resolve(__dirname, '..');

module.exports = {
	entry: './colocated',
	context: __dirname,
	output: {
		path: `${rootDir}/dist`,
	},
	module: {
		rules: [
			{
				test: /.html$/,
				use: {
					loader: 'colocate-loader',
					options: {
						rules: [
							{
								test: /^style$/,
								loader: 'styletron-loader',
							},
							{
								test: /^script$/,
								use: [{ loader: 'babel-loader' }],
							},
						],
					},
				},
			},
		],
	},
	resolveLoader: {
		modules: [rootDir, 'node_modules'],
	},
	resolve: {
		extensions: ['.js', '.html'],
	},
};
