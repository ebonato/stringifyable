/**
 * @interface
 * @template T
 *
 * @extends {de.benshu.stringifyable.Stringifyable}
 */
de.benshu.stringifyable.predicates.Predicate = function () {};

/**
 * @param {de.benshu.stringifyable.predicates.Predicate<T>} other
 * @returns {de.benshu.stringifyable.predicates.Predicate<T>}
 */
de.benshu.stringifyable.predicates.Predicate.prototype.and = function (other) {};

/**
 * @returns {de.benshu.stringifyable.predicates.Predicate<T>}
 */
de.benshu.stringifyable.predicates.Predicate.prototype.negate = function () {};

/**
 * @template D
 *
 * @param {function(D):T} fn
 * @returns {de.benshu.stringifyable.predicates.Predicate<D>}
 */
de.benshu.stringifyable.predicates.Predicate.prototype.onResultOf = function (fn) {};

/**
 * @param {de.benshu.stringifyable.predicates.Predicate<T>} other
 * @returns {de.benshu.stringifyable.predicates.Predicate<T>}
 */
de.benshu.stringifyable.predicates.Predicate.prototype.or = function (other) {};

/**
 * @param {de.benshu.stringifyable.predicates.Predicate<T>} self
 * @param {T} value
 * @returns boolean
 */
de.benshu.stringifyable.predicates.Predicate.prototype.call = function (self, value) {};

/** @type {function(T):boolean} */
de.benshu.stringifyable.predicates.Predicate.prototype.callable;
