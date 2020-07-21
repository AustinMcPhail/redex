/* eslint-disable no-undef */
module.exports = {
	'env': {
		'browser': true,
		'es2020': true
	},
	'extends': ['eslint:recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended'],
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaFeatures': {
			'jsx': true
		},
		'ecmaVersion': 11,
		'sourceType': 'module'
	},
	'plugins': ['react', '@typescript-eslint'],
	'rules': {
		'semi': ['error', 'never'],
		'quotes': [2, 'single'],
		'array-element-newline': ['error', 'consistent'],
		'array-bracket-newline': ['error', { 'multiline': true }],
		'@typescript-eslint/no-empty-interface': [
			0,
			{
				'allowSingleExtends': true
			}
		],
		'no-mixed-spaces-and-tabs': 0
	}
}
