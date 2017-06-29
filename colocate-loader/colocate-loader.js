const loaderUtils = require('loader-utils');

const getBlockContent = require('./lib/get-block-content');
const getLoadersForBlock = require('./lib/get-loaders-for-block');
const getNonScriptBlocksAsDependencyInjections = require('./lib/get-non-script-blocks-as-dependency-injections');
const generateBlockRequest = require('./lib/generate-block-request');

module.exports = function loadComponent(content) {
	const callback = this.async();
	const options = loaderUtils.getOptions(this) || {};

	if (options.block) {
		const blockContent = getBlockContent(options.block, content);
		callback(null, blockContent);
	} else {
		const injectedDeps = getNonScriptBlocksAsDependencyInjections(
			content,
			options.rules,
			this.resourcePath
		);

		const moduleScriptPath = `!!${getLoadersForBlock(
			'script',
			options.rules
		)}!${generateBlockRequest('script', this.resourcePath)}`;

		this.loadModule(moduleScriptPath, (err, source, sourceMap) => {
			const exportSrc = `
					${injectedDeps.join(';\n')};
					${source}
				`;
			callback(err, exportSrc, sourceMap);
		});
	}
};
