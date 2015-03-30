/**
 * @interface
 * @template D, I
 *
 * @extends {de.benshu.stringifyable.Stringifyable}
 */
de.benshu.stringifyable.functions.Function = function () {};

/**
 * @param {de.benshu.stringifyable.functions.Function<D>} self
 * @param {D} value
 * @returns {I}
 */
de.benshu.stringifyable.functions.Function.prototype.call = function (self, value) {};

/** @type {function(D):I} */
de.benshu.stringifyable.functions.Function.prototype.callable;
