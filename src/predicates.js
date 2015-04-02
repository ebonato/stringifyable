'use strict';

define(['onefold-js', './make-stringifyable'], function (js, makeStringifyable) {
    /**
     * @template T
     *
     * @param {function(T):boolean} predicate
     * @param {de.benshu.stringifyable.predicates.Predicate<T>=} negated
     */
    function makePredicate(predicate, negated) {
        return js.objects.extend(predicate, {
            get 'and'() { return this.and; },
            get 'negate'() { return this.negate; },
            get 'onResultOf'() { return this.onResultOf; },
            get 'or'() { return this.or; },
            get 'callable'() { return this.callable; }
        }, {
            get and() { return function (other) { return andPredicate([predicate, other]); }; },
            get negate() { return function () { return negated || negatedPredicate(predicate); }; },
            get onResultOf() { return function (fn) { return byFunctionPredicate(fn, predicate); }; },
            get or() { return function (other) { return orPredicate([predicate, other]); }; },
            get callable() { return predicate; }
        });
    }

    var alwaysFalse = () => false;
    makePredicate(alwaysFalse);
    makeStringifyable(alwaysFalse, () => ({'type': 'always-false-predicate'}));

    var alwaysTrue = () => true;
    makePredicate(alwaysTrue);
    makeStringifyable(alwaysTrue, () => ({'type': 'always-true-predicate'}));

    function andPredicate(components) {
        if (!components.length)
            return alwaysTrue;

        var result = value => {
            for (var i = 0, length = components.length; i < length; ++i)
                if (!components[i](value))
                    return false;
            return true;
        };

        makePredicate(result);
        makeStringifyable(result, ()=>({
            'type': 'and-predicate',
            'components': components.map(c=>c.stringifyable)
        }));

        return result;
    }

    function byFunctionPredicate(fn, predicate) {
        var result = value => predicate(fn(value));

        makePredicate(result);
        makeStringifyable(result, () => ({
            'type': 'by-function-predicate',
            'function': fn.stringifyable,
            'predicate': predicate.stringifyable
        }));

        return result;
    }

    function negatedPredicate(predicate) {
        var result = value => !predicate(value);

        makePredicate(result, predicate);
        makeStringifyable(result, () => ({
            'type': 'negated-predicate',
            'predicate': predicate.stringifyable
        }));

        return result;
    }

    function orPredicate(components) {
        if (!components.length)
            return alwaysFalse;

        var result = value => {
            for (var i = 0, length = components.length; i < length; ++i)
                if (components[i](value))
                    return true;
            return false;
        };

        makePredicate(result);
        makeStringifyable(result, ()=>({
            'type': 'or-predicate',
            'components': components.map(c=>c.stringifyable)
        }));

        return result;
    }

    return {
        alwaysFalse: alwaysFalse,
        alwaysTrue: alwaysTrue,
        and: andPredicate,
        from: function (predicate, supplier) {
            var p = v => predicate(v);
            makePredicate(p);
            makeStringifyable(p, supplier);
            return p;
        },
        or: orPredicate,
        regularExpression: regularExpression => {
            var result = string => regularExpression.test(string);

            makePredicate(result);
            makeStringifyable(result, ()=>({
                'type': 'regular-expression-predicate',
                'regularExpression': regularExpression.source,
                'caseSensitive': !regularExpression.ignoreCase,
                'multiline': regularExpression.multiline
            }));

            return result;
        }
    };
});
