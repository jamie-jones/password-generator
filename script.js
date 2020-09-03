// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// console.log(generatePassword);
// this function includes an object with multiple strings.
function generatePassword() {
  // the variables for password and passwordLength are empty quotations marks because they are not given, as the person's choices will affect the outcome.
  var password = "";
  var passwordLength = "";
  // .split is used to split the strings into an array  of subarrays.
  var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
  var upperCase = "ABCDEFGHIJKLMNPOQRSTUVWXYZ".split("");
  var symbols = "!@#$%^&*()".split("");
  var num = "1234567890".split("");
  // totalChoice will be where all of the arrays will come together in the final generated password.
  var totalChoice = [];
  // Once the button is pressed,  prompt will show up, asking the user to pick the length they would like their password to be.
  var passwordLength = prompt(
    "How many characters do you want in your password? (Note: Must be between 8 to 128 characters)"
  );
  // if the password does not fit the length criteria...
  if (passwordLength < 8 || passwordLength > 128) {
    // you will be alerted to select the correct number range...
    alert("Please select a number between 8 and 128.");
    // and you will be sent back to the first prompt with the of "generatePassword"
    generatePassword();
    // if correct number is entered, a series of confirms will show for you accept of deny
  } else {
    var passwordNum = confirm("Would you like to include numbers?");
    if (passwordNum === true) {
      // if true, the totalChoice will include the array mentioned.
      // the spread brings the specific array together along with the totalChoice.
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
      // If the user does not wish to use any characters, this alert will pop up and they will be sent back to the beginning with the generatePassword function
      alert("Must choose a character.");
      generatePassword();
      // otherwise, the randomizing begins.
      // randomIndex equals random pickings times the length of the password decided upon
      // password equals the totalChoice of randomized characters from the randomIndex
    } else {
      for (i = 0; i < passwordLength; i++) {
        var randomIndex = Math.floor(Math.random() * totalChoice.length);
        password = password + totalChoice[randomIndex];
      }
      // the generated password is then sent to the box to be viewed by the
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
