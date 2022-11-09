// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialCharacters = [
  " ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"
];
var numbers = [
  "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
];

var lettersLower = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];

var lettersUpper = [
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
];

function passwordCriteria() {
  var passwordLength = prompt("How many characters would you like in your password? Please choose a number between 8 and 128.");
  if (!passwordLength) {
    return;
  } else if (passwordLength<8) {
    alert("Your password needs to be more than 8 characters. Please try again.")
    passwordCriteria()
  } else if (passwordLength>128) {
    alert("Your password needs to be less than 128 characters. Please try again.")
    passwordCriteria()
  } else {
    var userSpecialCharacters = confirm("Do you want to include special characters in your password? Press ok if yes.")
    var userNumbers = confirm("Do you want to include numbers in your password? Press ok if yes.")
    var userLettersLower = confirm("Do you want to include lower case letters in your password? Press ok if yes.")
    var userLettersUpper = confirm("Do you want to include upper case letters in your password? Press ok if yes.")
    if (userSpecialCharacters && userNumbers && userLettersLower && userLettersUpper === false) {
      alert("You must select at least one type of characters to be included in your password. Please try again.")
      passwordCriteria()
    } else if (userSpecialCharacters) {
       var passwordSpecialCharacters = 
    }
  }
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
