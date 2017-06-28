const loaderUtils = require('loader-utils');
const { normalizeUse, normalizeCondition } = require('webpack/lib/RuleSet');

const cheerio = require('cheerio');
const camelCase = require('camelcase');

const getBlockRequest = (block, path) =>
	`colocate-loader?block=${block}!${path}`;

const getBlockContent = (block, content) =>
	cheerio.load(content, {
		ignoreWhitespace: true,
		xmlMode: true,
	})(block)
		.map((i, _) => cheerio(_).html())
		.get()
		.join('\n');

const getLoadersForBlock = (block = '', rules = []) => {
	const rule = rules.find(_ => normalizeCondition(_.test)(block));
	if (!rule) return '';
	return (
		rule.loader ||
		normalizeUse(rule.use)
			.map(_ => `${_.loader}${_.options ? `?${_.options}` : ''}`)
			.join('!')
	);
};

module.exports = function loadComponent(content) {
	const callback = this.async();

	const options = loaderUtils.getOptions(this) || {};

	if (options.block) {
		const blockContent = getBlockContent(options.block, content);
		callback(null, blockContent);
	} else {
		const rules = options.rules;

		const injectedDeps = cheerio.load(content, {
			ignoreWhitespace: true,
			xmlMode: true,
		})(`:root`)
			.map((i, block) => block.name)
			.get()
			.filter(block => block !== 'script')
			.map(
				block =>
					`var ${camelCase(block)} = require('!!${getLoadersForBlock(
						block,
						rules
					) || 'raw-loader'}!${getBlockRequest(block, this.resourcePath)}')`
			);

		this.loadModule(
			`!!${getLoadersForBlock('script', rules)}!${getBlockRequest(
				'script',
				this.resourcePath
			)}`,
			(err, source, sourceMap) => {
				console.log(source);

				const exportSrc = `
					${injectedDeps.join(';\n')};
					${source}
				`;
				callback(err, exportSrc, sourceMap);
			}
		);
	}
};
