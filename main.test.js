import { capitalize, reverseString, calculator } from './functions.js';

test('Function(s) should exist', () => {
    expect(capitalize).toBeDefined();
    expect(reverseString).toBeDefined();
    expect(calculator).toBeDefined();
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
]


test('Testing Capitlize function', () => {
    testCapitalize.forEach(e => {
        console.log(`Testing ${e.input}`);
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
