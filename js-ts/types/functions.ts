export namespace parameter {
    var sampleVariable: {bar: number}
    function foo(sampleParameter: {bar: number}) {}
}

export namespace returnType {
    interface Foo {
        foo: string
    }

    function foo(sample: Foo) {
        return sample
    }
}

export namespace inferred {
    interface Foo {
        foo: string
    }

    function foo(sample: Foo) {
        return sample
    }
}

export namespace misspelled {
    function foo() {
        return { fou: '123' }; // You might not find this misspelling `foo` till its too late
    }

    sendAsJSON(foo());
}

export namespace optional {
    function foo(bar: number, bas?: string): void {
        // ..
    }

    foo(123);
    foo(123, '123');
}

export namespace optionalDefault {
    function foo(bar: number, bas: string = '123') {
        console.log(bar, bas);
    }

    foo(123);           // 123, 123
    foo(123, '123');  // 123, 123
}

export namespace overloads {
    export function padding(a: number, b?: number, c?: number, d?: any) {
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
}

export namespace overloadsDone {
    export function padding(all: number);
    export function padding(topAndBottom: number, leftAndRight: number);
    export function padding(top: number, right: number, bottom: number, left: number);
    export function padding(a: number, b?: number, c?: number, d?: number) {
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
}