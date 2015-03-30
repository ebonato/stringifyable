/** @namespace */
de.benshu.stringifyable = {};

/**
 * @param {*} stringifyable
 * @param {function():Object}supplier
 * @returns {de.benshu.stringifyable.Stringifyable}
 */
de.benshu.stringifyable.makeStringifyable = function (stringifyable, supplier) {};

/**
 * @param {string} key
 * @param {*} value
 * @returns {*}
 */
de.benshu.stringifyable.stringifyReplacer = function (key, value) {};

/**
 * @interface
 */
de.benshu.stringifyable.Stringifyable = function () {};

/** @type {Object} */
de.benshu.stringifyable.Stringifyable.prototype.stringifyable;
