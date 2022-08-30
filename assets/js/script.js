// TODO: Assignment code here
function generatePassword() {
    const passwordLengthInput = window.prompt(`How long would you like your password to be? (8 -128)`);

    const passwordLength = parseInt(passwordLengthInput);

    if (isNaN(passwordLength)) {
        window.alert(`This input is not a number! Please input a number between 8 - 128.`);
    }

    if (passwordLength < 8 || passwordLength > 128) {
        window.alert(`This input is outside the input parameters. Please input a number between 8 - 128.`);
    }
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
