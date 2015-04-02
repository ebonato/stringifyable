/*
 * Copyright (c) 2015, Ben Schulz
 * License: BSD 3-clause (http://opensource.org/licenses/BSD-3-Clause)
 */
define(['onefold-js'],    function(onefold_js) {
var stringifyable_make_stringifyable, stringifyable_comparators, stringifyable_functions, stringifyable_predicates, stringifyable_stringify_replacer, stringifyable_internal, stringifyable;

stringifyable_make_stringifyable = function (js) {
  return function makeStringifyable(stringifyable, supplier) {
    return js.objects.extend(stringifyable, {
      get 'stringifyable'() {
        return supplier();
      }
    });
  };
}(onefold_js);

stringifyable_comparators = function (js, makeStringifyable) {
  /**
   * @template T
   *
   * @param {function(T, T):number} comparator
   * @param {de.benshu.stringifyable.comparators.Comparator<T>=} reversed
   */
  function makeComparator(comparator, reversed) {
    return js.objects.extend(comparator, {
      get 'onResultOf'() {
        return this.onResultOf;
      },
      get 'reverse'() {
        return this.reverse;
      },
      get 'callable'() {
        return this.callable;
      }
    }, {
      get onResultOf() {
        return function (fn) {
          return byFunctionComparator(fn, comparator);
        };
      },
      get reverse() {
        return function () {
          return reversed || reverseComparator(comparator);
        };
      },
      get callable() {
        return comparator;
      }
    });
  }
  function byFunctionComparator(fn, comparator) {
    var result = function (a, b) {
      return comparator(fn(a), fn(b));
    };
    makeComparator(result);
    makeStringifyable(result, function () {
      return {
        'type': 'by-function-comparator',
        'function': fn.stringifyable,
        'comparator': comparator.stringifyable
      };
    });
    return result;
  }
  function reverseComparator(comparator) {
    var result = function (a, b) {
      return -comparator(a, b);
    };
    makeComparator(result, comparator);
    makeStringifyable(result, function () {
      return {
        'type': 'reversed-comparator',
        'comparator': comparator.stringifyable
      };
    });
    return result;
  }
  var naturalComparator = function (a, b) {
    return typeof a === 'string' && typeof b === 'string'  // TODO use Intl.Collator once safari implements internationalization.. see http://caniuse.com/#feat=internationalization
 ? a.localeCompare(b) : a <= b ? a < b ? -1 : 0 : 1;
  };
  makeComparator(naturalComparator);
  makeStringifyable(naturalComparator, function () {
    return { 'type': 'natural-comparator' };
  });
  var indifferentComparator = function (a, b) {
    return 0;
  };
  makeComparator(indifferentComparator);
  makeStringifyable(indifferentComparator, function () {
    return { 'type': 'indifferent-comparator' };
  });
  return {
    indifferent: indifferentComparator,
    natural: naturalComparator
  };
}(onefold_js, stringifyable_make_stringifyable);

stringifyable_functions = function (js, makeStringifyable) {
  function makeFunction(fn) {
    return js.objects.extend(fn, {
      get 'callable'() {
        return this.callable;
      }
    }, {
      get callable() {
        return fn;
      }
    });
  }
  return {
    propertyAccessor: function (propertyName) {
      var fn = function (owner) {
        return owner[propertyName];
      };
      makeFunction(fn);
      makeStringifyable(fn, function () {
        return {
          'type': 'property-accessor',
          'propertyName': propertyName
        };
      });
      return fn;
    }
  };
}(onefold_js, stringifyable_make_stringifyable);

stringifyable_predicates = function (js, makeStringifyable) {
  /**
   * @template T
   *
   * @param {function(T):boolean} predicate
   * @param {de.benshu.stringifyable.predicates.Predicate<T>=} negated
   */
  function makePredicate(predicate, negated) {
    return js.objects.extend(predicate, {
      get 'and'() {
        return this.and;
      },
      get 'negate'() {
        return this.negate;
      },
      get 'onResultOf'() {
        return this.onResultOf;
      },
      get 'or'() {
        return this.or;
      },
      get 'callable'() {
        return this.callable;
      }
    }, {
      get and() {
        return function (other) {
          return andPredicate([
            predicate,
            other
          ]);
        };
      },
      get negate() {
        return function () {
          return negated || negatedPredicate(predicate);
        };
      },
      get onResultOf() {
        return function (fn) {
          return byFunctionPredicate(fn, predicate);
        };
      },
      get or() {
        return function (other) {
          return orPredicate([
            predicate,
            other
          ]);
        };
      },
      get callable() {
        return predicate;
      }
    });
  }
  var alwaysFalse = function () {
    return false;
  };
  makePredicate(alwaysFalse);
  makeStringifyable(alwaysFalse, function () {
    return { 'type': 'always-false-predicate' };
  });
  var alwaysTrue = function () {
    return true;
  };
  makePredicate(alwaysTrue);
  makeStringifyable(alwaysTrue, function () {
    return { 'type': 'always-true-predicate' };
  });
  function andPredicate(components) {
    if (!components.length)
      return alwaysTrue;
    var result = function (value) {
      for (var i = 0, length = components.length; i < length; ++i)
        if (!components[i](value))
          return false;
      return true;
    };
    makePredicate(result);
    makeStringifyable(result, function () {
      return {
        'type': 'and-predicate',
        'components': components.map(function (c) {
          return c.stringifyable;
        })
      };
    });
    return result;
  }
  function byFunctionPredicate(fn, predicate) {
    var result = function (value) {
      return predicate(fn(value));
    };
    makePredicate(result);
    makeStringifyable(result, function () {
      return {
        'type': 'by-function-predicate',
        'function': fn.stringifyable,
        'predicate': predicate.stringifyable
      };
    });
    return result;
  }
  function negatedPredicate(predicate) {
    var result = function (value) {
      return !predicate(value);
    };
    makePredicate(result, predicate);
    makeStringifyable(result, function () {
      return {
        'type': 'negated-predicate',
        'predicate': predicate.stringifyable
      };
    });
    return result;
  }
  function orPredicate(components) {
    if (!components.length)
      return alwaysFalse;
    var result = function (value) {
      for (var i = 0, length = components.length; i < length; ++i)
        if (components[i](value))
          return true;
      return false;
    };
    makePredicate(result);
    makeStringifyable(result, function () {
      return {
        'type': 'or-predicate',
        'components': components.map(function (c) {
          return c.stringifyable;
        })
      };
    });
    return result;
  }
  return {
    alwaysFalse: alwaysFalse,
    alwaysTrue: alwaysTrue,
    and: andPredicate,
    from: function (predicate, supplier) {
      var p = function (v) {
        return predicate(v);
      };
      makePredicate(p);
      makeStringifyable(p, supplier);
      return p;
    },
    or: orPredicate,
    regularExpression: function (regularExpression) {
      var result = function (string) {
        return regularExpression.test(string);
      };
      makePredicate(result);
      makeStringifyable(result, function () {
        return {
          'type': 'regular-expression-predicate',
          'regularExpression': regularExpression.source,
          'caseSensitive': !regularExpression.ignoreCase,
          'multiline': regularExpression.multiline
        };
      });
      return result;
    }
  };
}(onefold_js, stringifyable_make_stringifyable);

stringifyable_stringify_replacer = function (key, value) {
  return typeof value === 'function' || typeof value === 'object' ? value.stringifyable || value : value;
};

stringifyable_internal = {
  comparators: stringifyable_comparators,
  functions: stringifyable_functions,
  predicates: stringifyable_predicates,
  //
  makeStringifyable: stringifyable_make_stringifyable,
  stringifyReplacer: stringifyable_stringify_replacer
};
stringifyable = function (main) {
  return main;
}(stringifyable_internal);return stringifyable;
});