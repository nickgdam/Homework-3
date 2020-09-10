

document.querySelector("#generate").addEventListener("click", writePassword);


var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var Lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var Upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var all = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~","a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z","A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var confirmLength = "";
var confirmUpperCase;



function generatePassword() {
  var confirmLength = (prompt("How many characters would you like your password to contain?"));

  
  if (confirmLength >= 7 && confirmLength <= 129) {
    alert(`Your password will have ${confirmLength} characters`);}
    else  {
      alert("Password length must be between 8-128 characters. Please try again")
      return generatePassword()};
      

      
     
   
    var confirmUpperCase = prompt("What type of characters would you like to use? (Please type 'Uppercase', 'Lowercase', 'Numeric', 'Special' or 'All'.)");
      
      
      var passwordCharacters = []

     
      
   if (confirmUpperCase === "special" || confirmUpperCase === "Special") {
      passwordCharacters = passwordCharacters.concat(special)
    }

   else if (confirmUpperCase === "numeric" || confirmUpperCase === "Numeric") {
      passwordCharacters = passwordCharacters.concat(number)
    }

    else if (confirmUpperCase === "lowercase" || confirmUpperCase === "Lowercase") {
      passwordCharacters = passwordCharacters.concat(Lower)
    }

    else if (confirmUpperCase === "uppercase" || confirmUpperCase === "Uppercase") {
      passwordCharacters = passwordCharacters.concat(Upper)
    }
            
    else if (confirmUpperCase === "all" || confirmUpperCase === "All") {
      passwordCharacters = passwordCharacters.concat(all)
    }

              else {(alert("You must select valid criteria! Please try again!"));
              preventDefault();
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
