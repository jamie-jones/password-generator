// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// console.log(generatePassword);

function generatePassword() {
  var password = "";
  var passwordLength = "";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
  var upperCase = "ABCDEFGHIJKLMNPOQRSTUVWXYZ".split("");
  var symbols = "!@#$%^&*()".split("");
  var num = "1234567890".split("");
  var totalChoice = [];
  var passwordLength = prompt(
    "How many characters do you want in your password? (Note: Must be between 8 to 128 characters)"
  );
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please select a number between 8 and 128.");
    generatePassword();
  } else {
    var passwordNum = confirm("Would you like to include numbers?");
    if (passwordNum === true) {
      totalChoice = [...totalChoice, ...num];
    }
    var passwordLow = confirm("Would you like to include lowercase letters?");
    if (passwordLow === true) {
      totalChoice = [...totalChoice, ...lowerCase];
    }
    var passwordUp = confirm("Would you like to include uppercase numbers?");
    if (passwordUp === true) {
      totalChoice = [...totalChoice, ...upperCase];
    }
    var passwordChar = confirm("Would you like to include special characters?");
    if (passwordChar === true) {
      totalChoice = [...totalChoice, ...symbols];
    }
    if (
      passwordNum === false &&
      passwordLow === false &&
      passwordChar === false &&
      passwordUp === false
    ) {
      alert("Must choose a character.");
      generatePassword();
    } else {
      for (i = 0; i < passwordLength; i++) {
        var randomIndex = Math.floor(Math.random() * totalChoice.length);
        password = password + totalChoice[randomIndex];
      }
      return password;
    }

    // TODO: Generate a real password and replace the return string with a real string.
  }
}
// ALL CODE GOES IN HERE

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// when clicking Generate Button, prompt for length of password.
// if not correct number,
// when entered, ask if lowercase
// when confirmed/denied, ask if uppercase
// when confirmed/denied, ask if numbers
// when confirmed/denied, ask if symbols
// generate password with criteria
// show password in message box
