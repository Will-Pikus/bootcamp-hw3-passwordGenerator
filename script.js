// Assignment Code

//#################################### FUNCTION - Write password to the #password input ###################

function writePassword() {
  var password = generatePassword();
  // var password = "Hello";
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//#################################### FUNCTION -- generate password #####################################

function generatePassword() {
  var upperChoices =["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  var lowerChoices =["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var specialCharChoices = [" ","!",'"',"#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\ ","]","^","_","`","{","|","}","~"]
  var numberChoices = ["0","1","2","3","4","5","6","7","8","9"]
  var allChoices = []
  var password = ""
  var validLength = false
  var validCharTypes = 0

  // Get password length from user
  while (validLength == false) {
    var passwordLength = prompt("Enter the desired length of password, between 8 and 128")
    if (passwordLength >= 8 && passwordLength <= 128){
      validLength = true
    }
    else{
      alert("Please enter a valid password length.")
      validLength = false
    }
  }
  
  // Determine if uppercase characters are used in password and validate at least one type was chosen
  while (validCharTypes < 1){
 
    var includeUpper = confirm("Would you like to include uppercase characters in your password? \n Click OK if you want to include characters \n Click Cancel if you do not.")
    if (includeUpper == true){
      validCharTypes++
      allChoices.push(upperChoices)
    }
    // Determine if lowercase characters are used in password
    var includeLower = confirm("Would you like to include lowercase characters in your password? \n Click OK if you want to include characters \n Click Cancel if you do not.")
    if (includeLower == true){
      validCharTypes++
      allChoices.push(lowerChoices)
    }
    // Determine if numbers are used in password
    var includeNumbers = confirm("Would you like to include numbers in your password? \n Click OK if you want to include characters \n Click Cancel if you do not.")
    if (includeNumbers == true){
      validCharTypes++
      allChoices.push(numberChoices)
    }
    // Determine if special characters are used in password
    var includeSpecial = confirm("Would you like to include special characters in your password? \n OK Yes if you want to include characters \n Click Cancel if you do not.")
    if (includeSpecial == true){
      validCharTypes++
      allChoices.push(specialCharChoices)
    }
    if (validCharTypes == 0) {
      alert("Please select at least one char acter type to include in your password")
    }
  }

  // 
  for (var i = 0; i <= passwordLength; i++) {
    var allChoicesLen = allChoices.length
    var n = Math.floor(allChoicesLen*Math.random())
    var arrayLen = allChoices[n].length
    var j = Math.floor(arrayLen*Math.random())

    password = password + allChoices[n][j]
  }
  return password
}


//###################################### MAIN ############################################################

var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);