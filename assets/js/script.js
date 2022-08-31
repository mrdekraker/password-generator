/* eslint-disable no-plusplus */
// TODO: Assignment code here
// Generator Functions
function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomSymbol() {
    const symbols = ` ~!@#$%%^&*()_+{}[]?.<>;:-=_+`;
    return symbols[Math.floor(Math.random() * symbols.length)];
}

// !GENERATE PASSWORD FUNCTION
function generatePassword() {
    const passwordLengthInput = window.prompt(`How long would you like your password to be? (8 -128)`);

    const passwordLength = parseInt(passwordLengthInput);

    if (passwordLength < 8 || passwordLength > 128 || Number.isNaN(passwordLength)) {
        window.alert(`This input is outside the input parameters. Please input a number between 8 - 128.`);
        return generatePassword();
    }

    const includeLowercase = window.confirm(`Would you like lowercase in your password?`);
    const includeUppercase = window.confirm(`Would you like uppercase in your password?`);
    const includeNumbers = window.confirm(`Would you like numbers in your password?`);
    const includeSymbols = window.confirm(`Would you like symbols in your password?`);

    const characterArr = [];

    for (let i = 0; i < passwordLength; ) {
        if (includeLowercase === true) {
            characterArr.push(getRandomLower());
            i++;
            if (i === passwordLength) {
                break;
            }
        }
        if (includeUppercase === true) {
            characterArr.push(getRandomUpper());
            i++;
            if (i === passwordLength) {
                break;
            }
        }
        if (includeNumbers === true) {
            characterArr.push(getRandomNumber());
            i++;
            if (i === passwordLength) {
                break;
            }
        }
        if (includeSymbols === true) {
            characterArr.push(getRandomSymbol());
            i++;
            if (i === passwordLength) {
                break;
            }
        }
    }
    return characterArr.join(``);
}

// Get references to the #generate element
const generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
    const password = generatePassword();
    const passwordText = document.querySelector('#password');

    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
