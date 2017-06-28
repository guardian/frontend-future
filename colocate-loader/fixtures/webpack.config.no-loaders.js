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
