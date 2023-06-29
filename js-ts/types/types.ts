export module typeannotations {
    var num: number = 123
    function identity(num: number): number {
        return num
    }
}

export module m1 {
    var num: number
    var str: string
    var bool: boolean

    num = 123
    num = 123.456;
    num = '123';

    str = '123';
    str = 123;

    bool = true;
    bool = false;
    bool = 'false';
}

export module m2 {
    var boolArray: boolean[]
    boolArray = [
        true,
        false
    ]
    console.log(boolArray[0])
    console.log(boolArray.length)
    boolArray[1] = true
    boolArray = [
        false,
        false
    ]
    boolArray[0] = 'false'
    boolArray = 'false'
    boolArray = [
        true,
        'false'
    ]
}

export module m3 {
    interface Name {
        first: string
        second: string
    }
    var name: Name

    name = {
        first: 'John',
        second: 'Doe'
    };

    name = {
        first: 'John'
    };

    name = {
        first: 'John',
        second: 1337
    };
}

export module m4 {
    var name: {
        first: string
        second: string
    }
    name = {
        first: 'John',
        second: 'Doe'
    };
    name = {
        first: 'John'
    };
    name = {
        first: 'John',
        second: 1337
    };
}

module any {
    var power: any
    power = '123';
    power = 123;
    var num: number;
    power = num;
    num = power;
}

module null_undefined {
    var num: number;
    var str: string;
    num = null;
    str = undefined;
    foo: Null;
    bar: Undefined;
}

module void_ {
    function log(message): void {
        console.log(message);
    }
}

module generics {
    function reverse<T>(items: T[]): T[] {
        var toreturn = [];
        for (var i = items.length - 1; i >= 0; i--) {
            toreturn.push(items[i]);
        }
        return toreturn;
    }
    var sample = [
        1,
        2,
        3
    ];
    var reversed = reverse(sample);
    console.log(reversed);
    reversed[0] = '1';
    reversed = [
        '1',
        '2'
    ];
    reversed[0] = 1;
    reversed = [
        1,
        2
    ];
    var strArr = [
        '1',
        '2'
    ];
    var reversedStrs = reverse(strArr);
    reversedStr = [
        1,
        2
    ];
    var numArr = [
        1,
        2
    ];
    var reversedNums = numArr.reverse();
    reversedNums = [
        '1',
        '2'
    ];
}

module union {
    function formatCommandline(command: string[] | string) {
        var line = '';
        if (typeof command === 'string') {
            line = command.trim();
        }
        else {
            line = command.join(' ').trim();
        }
    }
}

module tuple {
    var nameNumber: [string, number];
    nameNumber = [
        'Jenny',
        8675309
    ];
    nameNumber = [
        'Jenny',
        '867-5309'
    ];
    var [name, num] = nameNumber;
}

module getset {
    var _value;
    function getOrSet(value) {
        if (value === undefined) {
            return _value;
        }
        else {
            _value = value;
        }
    }
    getOrSet(1);
    console.log(getOrSet());
}

module getset_ {
    var _value;
    function getOrSet(value?: number) {
        if (value === undefined) {
            return _value;
        }
        else {
            _value = value;
        }
    }
    getOrSet(1);
    console.log(getOrSet());
}

module overload {
    function callMe(): number;
    function callMe(v1: number);
    function callMe(v1: string, v2: number);
    function callMe(v1?: any, v2?: any): any {
        
    }
    callMe();
    callMe(1);
    callMe('jenny', 5309);
    callMe('jenny');
    callMe('jenny', '5309');
}

module alias {
    type StrOrNum = string | number
    var sample: StrOrNum;
    sample = 123;
    sample = '123';
    sample = true;
}
