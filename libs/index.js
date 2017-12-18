'use strict';

var typeOf = require('kind-of');

function isTruthy(val) {

	if (!val) return false;

	if (Array.isArray(val) || typeOf(val) === 'arguments') {
		return val.length > 0;
	}

	if (typeOf(val) === 'object') {
		return Object.keys(val).length > 0;
	}


	return true;
}

module.exports = isTruthy;