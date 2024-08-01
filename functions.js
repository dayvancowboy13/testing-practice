function capitalize(capitalizeThis) {

    return capitalizeThis.toUpperCase();

}

function reverseString(reverseThis) {

    let reversedString = '';

    for (let i = reverseThis.length; i >= 0; i--) {

        reversedString += reverseThis.charAt(i);

    }

    return reversedString;

}

export const calculator = {

    'add': function (a, b) {

        return a + b;

    },

    'subtract': function (a, b) {

        return a - b;

    },

    'multiply': function (a, b) {

        return a * b;

    },

    'divide': function (a, b) {

        return a / b;

    }
};

export { capitalize, reverseString };