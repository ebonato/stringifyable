'use strict';

define(function (require) {
    return {
        comparators: require('./comparators'),
        functions: require('./functions'),
        predicates: require('./predicates'),
        //
        makeStringifyable: require('./make-stringifyable'),
        stringifyReplacer: require('./stringify-replacer')
    };
});
