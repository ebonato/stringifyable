

/** @namespace */
de.benshu.stringifyable.comparators = {};

/** @type {de.benshu.stringifyable.comparators.Comparator<*>} */
de.benshu.stringifyable.comparators.indifferent;

/** @type {de.benshu.stringifyable.comparators.Comparator<*>} */
de.benshu.stringifyable.comparators.natural;


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


/** @namespace */
de.benshu.stringifyable.functions = {};

/**
 * @param {string} propertyName
 * @returns {de.benshu.stringifyable.functions.Function<*>}
 */
de.benshu.stringifyable.functions.propertyAccessor = function (propertyName) {};


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
