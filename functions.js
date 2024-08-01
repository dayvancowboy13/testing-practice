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

export const calcluator = {

    'add': function () {

        console.log('this adds');

    },

    'subtract': function (a, b) {

    }
};

export { capitalize, reverseString };