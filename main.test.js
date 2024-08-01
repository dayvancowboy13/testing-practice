import { capitalize, reverseString, calculator } from './functions.js';



test('Function(s) should exist', () => {
    expect(capitalize).toBeDefined();
    expect(reverseString).toBeDefined();
});

test('Calculator object exists', () => {
    expect(calculator).toBeDefined();

});

let calcFuncs = Object.getOwnPropertyNames(calculator);

test('Calculator\'s functions exist', () => {
    calcFuncs.forEach((f) => {
        expect(calculator[f]).toBeDefined();
    })

});

let testCapitalize = [
    {
        input: 'cat',
        expected: 'CAT'
    },
    {
        input: 'dog',
        expected: 'DOG'
    },
    {
        input: 'bob',
        expected: 'BOB'
    },
    {
        input: 'exceptional',
        expected: 'EXCEPTIONAL'
    }
];


test('Testing Capitlize function', () => {
    testCapitalize.forEach(e => {
        expect(capitalize(e.input)).toBe(e.expected);
    });
});

let testReverse = [
    {
        input: 'dog',
        expected: 'god'
    },
    {
        input: 'rat',
        expected: 'tar'
    },
    {
        input: 'create',
        expected: 'etaerc'
    },
    {
        input: 'wow, what a treat!',
        expected: '!taert a tahw ,wow'
    }
];

test('Testing ReverseString function', () => {
    // expect(reverseString('dog')).toBe('god');

    testReverse.forEach(function (t) {
        expect(reverseString(t.input)).toBe(t.expected);
    })

})

let addTest = [
    {
        a: 1,
        b: 2,
        expected: 3
    },
    {
        a: 2,
        b: 2,
        expected: 4
    },
    {
        a: 10,
        b: 2,
        expected: 12
    }
];

let subtractTest = [
    {
        a: 1,
        b: 1,
        expected: 0
    },
    {
        a: 2,
        b: 1,
        expected: 1
    },
    {
        a: 3,
        b: 1,
        expected: 2
    },
    {
        a: 10,
        b: 1,
        expected: 9
    },
    {
        a: 101,
        b: 12,
        expected: 89
    },
];

let multiplyTest = [
    {
        a: 1,
        b: 1,
        expected: 1
    },
    {
        a: 2,
        b: 1,
        expected: 2
    },
    {
        a: 3,
        b: 1,
        expected: 3
    },
    {
        a: 10,
        b: 4,
        expected: 40
    },
    {
        a: 6,
        b: 7,
        expected: 42
    },
];

let divideTest = [
    {
        a: 1,
        b: 1,
        expected: 1
    },
    {
        a: 2,
        b: 2,
        expected: 1
    },
    {
        a: 12,
        b: 4,
        expected: 3
    },
    {
        a: 160,
        b: 4,
        expected: 40
    },
    {
        a: 81,
        b: 9,
        expected: 9
    },
    {
        a: 100,
        b: 10,
        expected: 10
    },
];

test('Testing Calculator functions', () => {
    addTest.forEach(function (t) {
        expect(calculator.add(t.a, t.b)).toBe(t.expected);

    });
    subtractTest.forEach(function (t) {
        expect(calculator.subtract(t.a, t.b)).toBe(t.expected);
    });
    multiplyTest.forEach(function (t) {
        expect(calculator.multiply(t.a, t.b)).toBe(t.expected);
    });
    divideTest.forEach(function (t) {
        expect(calculator.divide(t.a, t.b)).toBe(t.expected);
    })

    expect(calculator.divide(79, 9)).toBeCloseTo(8.777);

});
