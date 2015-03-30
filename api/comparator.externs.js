/**
 * @interface
 * @template T
 *
 * @extends {de.benshu.stringifyable.Stringifyable}
 */
de.benshu.stringifyable.comparators.Comparator = function () {};

/**
 * @template D
 *
 * @param {function(D):T} fn
 * @returns {de.benshu.stringifyable.comparators.Comparator<D>}
 */
de.benshu.stringifyable.comparators.Comparator.prototype.onResultOf = function (fn) {};

/**
 * @returns {de.benshu.stringifyable.comparators.Comparator<T>}
 */
de.benshu.stringifyable.comparators.Comparator.prototype.reverse = function () {};

/**
 * @param {de.benshu.stringifyable.comparators.Comparator<T>} self
 * @param {T} a
 * @param {T} b
 * @returns boolean
 */
de.benshu.stringifyable.comparators.Comparator.prototype.call = function (self, a, b) {};

/** @type {function(T, T):number} */
de.benshu.stringifyable.comparators.Comparator.prototype.callable;
