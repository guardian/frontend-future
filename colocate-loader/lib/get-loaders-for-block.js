// @flow
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
						? `?${JSON.stringify(
								use.options,
								(key, value) =>
									// eslint-disable-next-line no-useless-escape
									typeof value === 'string' ? value.replace(/'/g, `\'`) : value
							)}`
						: ''}`
			)
			.join('!')
	);
};
