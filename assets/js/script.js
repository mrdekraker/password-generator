// TODO: Assignment code here

// TODO: Get references to the #generate element
const generateBtn = document.querySelector('#generate');

function onClick(e) {
    generateBtn.addEventListener(`click`, e) = 
        console.log(`Very click. Much wow.`);

}

onClick();

// Write password to the #password input
function writePassword() {
    const password = generatePassword();
    const passwordText = document.querySelector('#password');

    passwordText.value = password;
}

// Add event listener to generate button
// generateBtn.addEventListener('click', writePassword);

// const password = document.querySelector(`password`);

// TODO: Generator Functions
// function getRandomLower() {
//     return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
// }
// function getRandomUpper() {
//     return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
// }
// function getRandomNumber() {
//     return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
// }
// function getRandomSymbol() {
//     const symbols = ` ~!@#$%%^&*()_+{}[]?.<>;:-=_+`;
//     return symbols[Math.floor(Math.random() * symbols.length)];
// }

// ! SET functions to randomize
// const randomize = {
//     lower: getRandomLower,
//     upper: getRandomUpper,
//     number: getRandomNumber,
//     symbol: getRandomSymbol,
// };

// console.log(getRandomLower());
// console.log(getRandomUpper());
// console.log(getRandomNumber());
// console.log(getRandomSymbol());
