const cheerio = require('cheerio');
const camelCase = require('camelcase');

const getLoadersForBlock = require('./get-loaders-for-block');
const generateBlockRequest = require('./generate-block-request');

module.exports = (content, rules, path) =>
	cheerio.load(content, {
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
				) || ''}!${generateBlockRequest(block, path)}')`
		);
