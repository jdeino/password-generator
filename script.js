// Variables
var includeLowerCase = confirm("Include lowercase letters in password?");
var includeUpperCase = confirm("Include uppercase letters in password?");
var incldueNumbers = confirm("Include numbers in password?");
var incldueSpecialCharacter = confirm("Include special characters in password?");
var pwLength = parseInt(prompt("How long should the password be?"));


// Generate Password
if (pwLength >= 8 && pwLength <= 128) {
  function generatePassword() {
    var space = "";
    var lCase = "abcdefghijklmnopqrstuvwxyz";
    var uCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numbers = "0123456789";
    var special = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

    if (includeLowerCase === true && includeUpperCase === true 
      && incldueNumbers === true && incldueSpecialCharacter == true) {
        space += lCase;
        space += uCase;
        space += numbers;
        space += special;
    }

    var password = "";
    for (var i = 0; i < pwLength; i++) {
      password += space.charAt(Math.floor(Math.random() * space.length));
    }  
    return password;
   }
  } else {
    alert("Error, invalid charcter types. \nPlease incldue at least one type of character.");
};



// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);