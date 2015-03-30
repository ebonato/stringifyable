/** @namespace */
de.benshu.stringifyable.predicates = {};

/** @type {de.benshu.stringifyable.predicates.Predicate<*>} */
de.benshu.stringifyable.predicates.alwaysTrue;

/** @type {de.benshu.stringifyable.predicates.Predicate<*>} */
de.benshu.stringifyable.predicates.alwaysFalse;

/**
 * @template T
 *
 * @param {Array<de.benshu.stringifyable.predicates.Predicate<T>>} components
 * @returns de.benshu.stringifyable.predicates.Predicate<T>
 */
de.benshu.stringifyable.predicates.and = function (components) {};

/**
 * @template T
 *
 * @param {function(T):boolean} predicate
 * @returns de.benshu.stringifyable.predicates.Predicate<T>
 */
de.benshu.stringifyable.predicates.from;

/**
 * @template T
 *
 * @param {Array<de.benshu.stringifyable.predicates.Predicate<T>>} components
 * @returns de.benshu.stringifyable.predicates.Predicate<T>
 */
de.benshu.stringifyable.predicates.or = function (components) {};

/**
 * @param {RegExp} regularExpression
 * @returns de.benshu.stringifyable.predicates.Predicate<string>
 */
de.benshu.stringifyable.predicates.regularExpression = function (regularExpression) {};
