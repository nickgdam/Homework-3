

document.querySelector("#generate").addEventListener("click", writePassword);


var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var all = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~","a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z","A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var confirmLength = "";
var confirmUpperCase;



function generatePassword() {
  var confirmLength = (prompt("How many characters would you like your password to contain?"));

  
  if (confirmLength >= 8 && confirmLength <= 128) {
    alert(`Your password will have ${confirmLength} characters`);}
    else  {
      alert("Password length must be between 8-128 characters. Please try again")
      return generatePassword()};
  
      
      
      var passwordCharacters = []
      
      var confirmSpecialCharacter = confirm("Click OK to confirm if you would like to include special characters");
      var confirmNumericCharacter = confirm("Click OK to confirm if you would like to include numeric characters");    
      var confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
      var confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters");
        
        while(confirmUpperCase === false && confirmLowerCase === false && confirmSpecialCharacter === false && confirmNumericCharacter === false) {
          alert("You must choose at least one parameter");
          var confirmSpecialCharacter = confirm("Click OK to confirm if you would like to include special characters");
          var confirmNumericCharacter = confirm("Click OK to confirm if you would like to include numeric characters");    
          var confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
          var confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters");   
          {(alert("You must select valid criteria! Please try again!"));
              preventDefault();
  }
      } 
  
      
        var passwordCharacters = []
        
      if (confirmSpecialCharacter === true) {
        passwordCharacters = passwordCharacters.concat(special)
      }
  
      if (confirmNumericCharacter === true) {
        passwordCharacters = passwordCharacters.concat(number)
      }
        
      if (confirmLowerCase === true) {
        passwordCharacters = passwordCharacters.concat(lower)
      }
  
      if (confirmUpperCase === true) {
        passwordCharacters = passwordCharacters.concat(upper)
      }
  

               

console.log(passwordCharacters)
    
      
      var randomPassword = ""
      
      for (var i = 0; i < confirmLength; i++) {
        randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
        console.log(randomPassword)
      }
      return randomPassword;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
