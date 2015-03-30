'use strict';

define(['onefold-js', './make-stringifyable'], function (js, makeStringifyable) {
    /**
     * @template T
     *
     * @param {function(T, T):number} comparator
     * @param {de.benshu.stringifyable.comparators.Comparator<T>=} reversed
     */
    function makeComparator(comparator, reversed) {
        return js.objects.extend(comparator, {
            get 'onResultOf'() { return this.onResultOf; },
            get 'reverse'() { return this.reverse; },
            get 'callable'() { return this.callable; }
        }, {
            get onResultOf() { return function (fn) { return byFunctionComparator(fn, comparator); }; },
            get reverse() { return function () { return reversed || reverseComparator(comparator); }; },
            get callable() { return comparator; }
        });
    }

    function byFunctionComparator(fn, comparator) {
        var result = (a, b) => {
            return comparator(fn(a), fn(b));
        };

        makeComparator(result);
        makeStringifyable(result, () => ({
            type: 'by-function-comparator',
            function: fn.stringifyable,
            comparator: comparator.stringifyable
        }));

        return result;
    }

    function reverseComparator(comparator) {
        var result = (a, b) => -comparator(a, b);

        makeComparator(result, comparator);
        makeStringifyable(result, () => ({
            type: 'reversed-comparator',
            comparator: comparator.stringifyable
        }));

        return result;
    }

    var naturalComparator = (a, b) => {
        return typeof a === 'string' && typeof b === 'string'
            // TODO use Intl.Collator once safari implements internationalization.. see http://caniuse.com/#feat=internationalization
            ? (a.localeCompare(b))
            : (a <= b ? a < b ? -1 : 0 : 1);
    };
    makeComparator(naturalComparator);
    makeStringifyable(naturalComparator, () => ({
        type: 'natural-comparator'
    }));

    var indifferentComparator = (a, b) => 0;
    makeComparator(indifferentComparator);
    makeStringifyable(indifferentComparator, () => ({
        type: 'indifferent-comparator'
    }));

    return {
        indifferent: indifferentComparator,
        natural: naturalComparator
    };
});
