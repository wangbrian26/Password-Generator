// Assignment Code
var generateBtn = document.querySelector("#generate");

// Global arrays that have all of the possible characters for the user's password.
var specialCharacters = [
  " ",
  "!",
  '"',
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "\\",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var lettersLower = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var lettersUpper = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Global empty arrays that will have things inputed into it during the function.

var userPassword = [];
var possibleCharacters = [];

// This is a function to take in the criteria that the user wants.
function passwordCriteria() {
  var passwordLength = prompt(
    "How many characters would you like in your password? Please choose a number between 8 and 128."
  );
  if (!passwordLength) {
    return;
  } else if (passwordLength < 8) {
    alert(
      "Your password needs to be more than 8 characters. Please try again."
    );
    passwordCriteria();
  } else if (passwordLength > 128) {
    alert(
      "Your password needs to be less than 128 characters. Please try again."
    );
    passwordCriteria();
  } else if (passwordLength >= 8 && passwordLength <= 128) {
    var userSpecialCharacters = confirm(
      "Do you want to include special characters in your password? Press ok if yes. If not, press cancel."
    );
    var userNumbers = confirm(
      "Do you want to include numbers in your password? Press ok if yes. If not, press cancel."
    );
    var userLettersLower = confirm(
      "Do you want to include lower case letters in your password? Press ok if yes. If not, press cancel."
    );
    var userLettersUpper = confirm(
      "Do you want to include upper case letters in your password? Press ok if yes. If not, press cancel."
    );
    if (
      userSpecialCharacters === false &&
      userNumbers === false &&
      userLettersLower === false &&
      userLettersUpper === false
    ) {
      alert(
        "You must select at least one type of characters to be included in your password. Please try again."
      );
      passwordCriteria();
    } else {
      var userPasswordCriteria = {
        passwordLength: passwordLength,
        userSpecialCharacters: userSpecialCharacters,
        userNumbers: userNumbers,
        userLettersLower: userLettersLower,
        userLettersUpper: userLettersUpper,
      };
    }
    return userPasswordCriteria;
  } else {
    alert("You must input a number.");
    passwordCriteria();
  }
}

// This is a function to select a random character from the specific array
function randomCharacter(array) {
  var randomCharacter = array[Math.floor(Math.random() * array.length)];
  return randomCharacter;
}

// Credit to javascript.info/task/shuffle
// This is a function to shuffle the array. This allows me to shuffle the password at the end.
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// This is the function to generate the password.
function generatePassword() {
  var userPassword = [];
  var possibleCharacters = [];
  var userOptions = passwordCriteria();
  var i = 0;
  if (userOptions.userSpecialCharacters === true) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    userPassword = userPassword.concat(randomCharacter(specialCharacters));
    i++;
  }
  if (userOptions.userNumbers === true) {
    possibleCharacters = possibleCharacters.concat(numbers);
    userPassword = userPassword.concat(randomCharacter(numbers));
    i++;
  }
  if (userOptions.userLettersLower === true) {
    possibleCharacters = possibleCharacters.concat(lettersLower);
    userPassword = userPassword.concat(randomCharacter(lettersLower));
    i++;
  }
  if (userOptions.userLettersUpper === true) {
    possibleCharacters = possibleCharacters.concat(lettersUpper);
    userPassword = userPassword.concat(randomCharacter(lettersUpper));
    i++;
  }
  for (var i; i < userOptions.passwordLength; i++) {
    userPassword = userPassword.concat(randomCharacter(possibleCharacters));
  }
  userPassword = userPassword.toString();
  userPassword = userPassword.replaceAll(",", "");
  shuffle(userPassword);
  return userPassword;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
