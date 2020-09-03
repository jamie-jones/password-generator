// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

var password = "";
var passwordLength = "";
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
var upperCase = "ABCDEFGHIJKLMNPOQRSTUVWXYZ".split("");
var symbols = "!@#$%^&*()".split("");
var num = "1234567890".split("");

// console.log(generatePassword);

function generatePassword() {
  var passwordLength = prompt(
    "How many characters do you want in your password? (Note: Must be between 8 to 128 characters)"
  );
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please select a number between 8 and 128.");
  }
  var passwordNum = confirm("Would you like to include numbers?");

  var passwordLow = confirm("Would you like to include lowercase letters?");

  var passwordUp = confirm("Would you like to include uppercase numbers?");

  var passwordChar = confirm("Would you like to include special characters?");

  //
  // } else if (wantLower) {
  //   var wantUpper = confirm("Do you want to include uppercase letters?");
  // } else if (wantNum) {
  //   var wantNum = confirm("Do you want to include numbers?");
  // } else if (wantChar) {
  //   var wantNum = confirm("Do you want to include special characters?");

  // TODO: Generate a real password and replace the return string with a real string.
  return password;
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
