'use strict';

define(['onefold-js', './make-stringifyable'], function (js, makeStringifyable) {
    function makeFunction(fn) {
        return js.objects.extend(fn, {
            get 'callable'() { return this.callable; }
        }, {
            get callable() { return fn; }
        });
    }

    return {
        propertyAccessor: propertyName => {
            var fn = owner => owner[propertyName];

            makeFunction(fn);
            makeStringifyable(fn, () => ({
                type: 'property-accessor',
                propertyName: propertyName
            }));

            return fn;
        }
    };
});
