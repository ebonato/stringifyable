'use strict';

define(['onefold-js'], function (js) {
    return function makeStringifyable(stringifyable, supplier) {
        return js.objects.extend(stringifyable, {
            get 'stringifyable'() { return supplier(); }
        });
    };
});
