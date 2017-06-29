const { normalizeUse, normalizeCondition } = require('webpack/lib/RuleSet');

module.exports = (block = '', rules = []) => {
	const rule = rules.find(_ => normalizeCondition(_.test)(block));
	if (!rule) return '';
	return (
		rule.loader ||
		normalizeUse(rule.use)
			.map(
				use =>
					`${use.loader}${use.options
						? `?${JSON.stringify(use.options).replace(/'/g, "\\'")}`
						: ''}`
			)
			.join('!')
	);
};
