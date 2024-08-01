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

export function caesarCipher(stringToShift, shiftFactor) {

    const a_UTF_CODE = 97;
    const A_UTF_CODE = 65;
    const z_UTF_CODE = 122;
    const Z_UTF_CODE = 90;

    let stringToReturn = '';

    for (let i = 0; i < stringToShift.length; i++) {


        let charCode = stringToShift.charCodeAt(i);
        if (charCode >= a_UTF_CODE && charCode <= z_UTF_CODE) {

            if (charCode + shiftFactor <= z_UTF_CODE) charCode += shiftFactor;
            else {

                let diff = z_UTF_CODE - charCode;
                charCode = a_UTF_CODE + (shiftFactor - diff - 1);

            }

        } else if (charCode >= A_UTF_CODE && charCode <= Z_UTF_CODE) {

            if (charCode + shiftFactor <= Z_UTF_CODE) charCode += shiftFactor;
            else {

                let diff = Z_UTF_CODE - charCode;
                charCode = A_UTF_CODE + (shiftFactor - diff - 1);

            }

        }

        stringToReturn += String.fromCharCode(charCode);

    }

    return stringToReturn;

}

export { capitalize, reverseString };