"use strict";

module.exports = {
	"env": {
		"browser": true,
		"commonjs": true,
		"es2020": true
	},
	"extends": [
		"eslint:recommended",
		"plugin:vue/essential"
	],
	"globals": {
		"IMPORT_POLYFILLS": "readonly",
		"axios": "readonly"
	},
	"parserOptions": {
		"ecmaVersion": 11,
		"parser": "babel-eslint",
		"sourceType": "module"
	},
	"plugins": [
		"vue"
	],
	"rules": {
		"no-console": process.env.NODE_ENV === "production" ? "error" : "off",
		"no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
		"indent": [
			"error",
			"tab"
		],
		"linebreak-style": [
			"error",
			"unix"
		],
		"quotes": [
			"error",
			"double"
		],
		"semi": [
			"error",
			"always"
		]
	}
};
