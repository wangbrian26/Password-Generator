// Assignment Code
var generateBtn = document.querySelector("#generate");
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

var userPassword = [];
var possibleCharacters = [];

console.log(possibleCharacters.concat(specialCharacters));
function passwordCriteria() {
  var passwordLength = parseInt(
    prompt(
      "How many characters would you like in your password? Please choose a number between 8 and 128."
    )
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
  } else {
    var userSpecialCharacters = confirm(
      "Do you want to include special characters in your password? Press ok if yes."
    );
    var userNumbers = confirm(
      "Do you want to include numbers in your password? Press ok if yes."
    );
    var userLettersLower = confirm(
      "Do you want to include lower case letters in your password? Press ok if yes."
    );
    var userLettersUpper = confirm(
      "Do you want to include upper case letters in your password? Press ok if yes."
    );
    if (
      userSpecialCharacters &&
      userNumbers &&
      userLettersLower &&
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
    // console.log(userPasswordCriteria);
    return userPasswordCriteria;
  }
}

function randomCharacter(array) {
  var randomCharacter = array[Math.floor(Math.random() * array.length)];
  return randomCharacter;
}

// Credit to javascript.info/task/shuffle

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function generatePassword() {
  var userPassword = [];
  var possibleCharacters = [];
  var userOptions = passwordCriteria();
  // console.log(userOptions);
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
    console.log(possibleCharacters);
  }
  if (userOptions.userLettersLower === true) {
    possibleCharacters = possibleCharacters.concat(lettersLower);
    userPassword = userPassword.concat(randomCharacter(lettersLower));
    i++;
    // console.log(possibleCharacters);
  }
  if (userOptions.userLettersUpper === true) {
    possibleCharacters = possibleCharacters.concat(lettersUpper);
    userPassword = userPassword.concat(randomCharacter(lettersUpper));
    i++;
    // console.log(possibleCharacters);
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
