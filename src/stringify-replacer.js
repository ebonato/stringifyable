'use strict';

define([], function () {
    return (key, value) => {
        return typeof value === 'function' || typeof value === 'object'
            ? value.stringifyable || value
            : value;
    };
});
