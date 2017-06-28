// @flow
/* eslint-disable global-require, no-console,import/no-dynamic-require */

const path = require('path');
const webpack = require('webpack');
const MemoryFileSystem = require('memory-fs');

const memFs = new MemoryFileSystem();

const distDir = path.resolve(__dirname, 'dist');
memFs.mkdirpSync(distDir);

const compileAndTest = (config, done) => {
	const compiler = webpack(require(`./fixtures/webpack.config.${config}.js`));

	compiler.outputFileSystem = memFs;
	compiler.run(err => {
		if (err) console.log(err);
		const content = memFs.readFileSync(
			path.resolve(distDir, 'main.js'),
			'utf8'
		);
		expect(content).toMatchSnapshot();
		done();
	});
};

it('works without other loaders', done => {
	compileAndTest('no-loaders', done);
});

it('works with other loaders', done => {
	compileAndTest('loaders', done);
});
