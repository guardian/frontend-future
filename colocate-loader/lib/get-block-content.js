const cheerio = require('cheerio');

module.exports = (block, content) =>
	cheerio.load(content, {
		ignoreWhitespace: true,
		recognizeSelfClosing: true,
	})(block)
		.map((i, _) => cheerio(_).html())
		.get()
		.join('\n');
