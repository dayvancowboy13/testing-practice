import { capitalize, reverseString, calculator, caesarCipher } from './functions.js';

test('Function(s) should exist', () => {
    expect(capitalize).toBeDefined();
    expect(reverseString).toBeDefined();
    expect(caesarCipher).toBeDefined();
});

test('Testing Caesar Ciper (just punctuation)', () => {
    expect(caesarCipher('...', 1)).toBe('...');
});

test('Testing Caesar Ciper (with punctuation)', () => {
    expect(caesarCipher('x.yz', 1)).toBe('y.za');
    expect(caesarCipher('x,.yz', 1)).toBe('y,.za');
    expect(caesarCipher('{x,.yz}', 1)).toBe('{y,.za}');
});

test('Testing Caesar Ciper (multiple letters, upper and lower case)', () => {
    expect(caesarCipher('AbbA', 1)).toBe('BccB');
    expect(caesarCipher('AbbA', 2)).toBe('CddC');
    expect(caesarCipher('AbAcA', 1)).toBe('BcBdB');
    expect(caesarCipher('ZyyXz', 1)).toBe('AzzYa');
});

test('Testing Caesar Ciper (multiple letters, upper case)', () => {
    expect(caesarCipher('XYZ', 3)).toBe('ABC');
    expect(caesarCipher('AAA', 1)).toBe('BBB');
    expect(caesarCipher('ABC', 1)).toBe('BCD');
});

test('Testing Caesar Ciper (multiple letters, lower case)', () => {
    expect(caesarCipher('aa', 1)).toBe('bb');
    expect(caesarCipher('aa', 2)).toBe('cc');
    expect(caesarCipher('bba', 1)).toBe('ccb');
    expect(caesarCipher('ab', 1)).toBe('bc');
    expect(caesarCipher('zz', 1)).toBe('aa');
    expect(caesarCipher('aa', 2)).toBe('cc');
    expect(caesarCipher('xyz', 1)).toBe('yza');
});

test('Testing Caesar Ciper (single letter, upper case)', () => {
    expect(caesarCipher('B', 1)).toBe('C');
    expect(caesarCipher('B', 2)).toBe('D');
    expect(caesarCipher('Z', 1)).toBe('A');
    expect(caesarCipher('Z', 2)).toBe('B');
    expect(caesarCipher('Y', 2)).toBe('A');
});

test('Testing Caesar Cipher (single letter, lower case)', () => {
    expect(caesarCipher('a', 1)).toBe('b');
    expect(caesarCipher('b', 1)).toBe('c');
    expect(caesarCipher('c', 1)).toBe('d');
    expect(caesarCipher('c', 2)).toBe('e');
    expect(caesarCipher('z', 1)).toBe('a');
    expect(caesarCipher('z', 3)).toBe('c');
    expect(caesarCipher('z', 3)).toBe('c');
});


test('Calculator object exists', () => {
    expect(calculator).toBeDefined()

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
