// TODO: Assignment code here
function generatePassword() {
    // //Set up length input
    const passwordLengthInput = window.prompt(`How long would you like your password to be? (8 -128)`);

    const passwordLength = parseInt(passwordLengthInput);

    if (isNaN(passwordLength)) {
        window.alert(`This input is not a number! Please input a number between 8 - 128.`);
    }

    if (passwordLength < 8 || passwordLength > 128) {
        window.alert(`This input is outside the input parameters. Please input a number between 8 - 128.`);
    }

    // //Set up prompts
    const includeNumbers = window.confirm(`Would you like numbers in your password?`);
    const includeLowercase = window.confirm(`Would you like lowercase in your password?`);
    const includeUppercase = window.confirm(`Would you like uppercase in your password?`);
    const includeSymbols = window.confirm(`Would you like symbols in your password?`);

    // Start process over if everything is declined
    if (
        includeNumbers === false ||
        includeLowercase === false ||
        includeUppercase === false ||
        includeSymbols === false
    ) {
        window.alert(`Please choose at least one of the options to generate your password.`);
        generatePassword();
    }

    // SET UP GENERATOR FUNCTIONS
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
