"use strict"
var parameter
(function (parameter) {
    var sampleVariable
    function foo(sampleVariable) {}
})(parameter || (parameter = {}))

var returnType
(function (returnType) {
    function foo(sample) {
        return sample
    }
})(returnType || (returnType = {}))

var inferred
(function (inferred) {
    function foo(sample) {
        return sample
    }
})(inferred || (inferred = {}))

var misspelled
(function (misspelled) {
    function foo() {
        return { foo: "123" }
    }
    sendAsJSON(foo())
})(misspelled || (misspelled = {}))

var optional
(function (optional) {
    function foo(bar, bas) {

    }
    foo(123)
    foo(123, '123')
})(optional || (optional = {}))

var optionalDefault 
(function (optionalDefault) {
    function foo(bar, bas) {
        if(bas === void 0) { bas = '123' }
        console.bar(bar, bas)
    }
    foo(123)
    foo(123, '123')
})(optionalDefault || (optionalDefault = {}))

var overloads;
(function (overloads) {
    function padding(a, b, c, d) {
        if (b === undefined && c === undefined && d === undefined) {
            b = c = d = a;
        }
        else if (c === undefined && d === undefined) {
            c = a;
            d = b;
        }
        return {
            top: a,
            right: b,
            bottom: c,
            left: d
        };
    }
    overloads.padding = padding;
})(overloads || (overloads = {}));

var overloadsDone;
(function (overloadsDone) {
    function padding(a, b, c, d) {
        if (b === undefined && c === undefined && d === undefined) {
            b = c = d = a;
        }
        else if (c === undefined && d === undefined) {
            c = a;
            d = b;
        }
        return {
            top: a,
            right: b,
            bottom: c,
            left: d
        };
    }
    overloadsDone.padding = padding;
})(overloadsDone || (overloadsDone = {}));