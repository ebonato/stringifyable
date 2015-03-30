'use strict';

define(function (require) {
    var comparators = require('./comparators');
    var functions = require('./functions');
    var predicates = require('./predicates');

    return {
        'comparators': {
            'indifferent': comparators.indifferent,
            'natural': comparators.natural
        },
        'functions': {
            'propertyAccessor': functions.propertyAccessor
        },
        'predicates': {
            'alwaysFalse': predicates.alwaysFalse,
            'alwaysTrue': predicates.alwaysTrue,
            'and': predicates.and,
            'from': predicates.from,
            'or': predicates.or,
            'regularExpression': predicates.regularExpression
        },
        //
        'makeStringifyable': require('./make-stringifyable'),
        'stringifyReplacer': require('./stringify-replacer')
    };
});
