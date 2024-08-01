import { capitalize } from './functions.js';

test('Function(s) should exist', () => {
    expect(capitalize).toBeDefined();
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
