// Assignment code here
function generatePassword(){
  do{
    var pLength = prompt("Choose a length of at least 8 characters and no more than 128 characters for the Password", 8);
  }while(pLength<8||pLength>128||isNaN(pLength));
  console.log(pLength);
  var charTypes = [];
  var type = true;
  while(type){
    var lower = prompt("Do you want to include lowercase characters? (Yes/No)", "Yes");
    lower = lower.toLowerCase();
    if(lower=="yes"||lower=="no"){
      type = false;
      if(lower=="yes"){
        charTypes.push("Lower");
      }
    }
  }  
  type = true;
  while(type){
    var upper = prompt("Do you want to include uppercase characters? (Yes/No)", "Yes");
    upper = upper.toLowerCase();
    if(upper=="yes"||upper=="no"){
      type = false;
      if(upper=="yes"){
        charTypes.push("Upper");
      }
    }
  } 
  type = true;
  while(type){
    var numeric = prompt("Do you want to include numeric characters? (Yes/No)", "Yes");
    numeric = numeric.toLowerCase();
    if(numeric=="yes"||numeric=="no"){
      type = false;
      if(numeric=="yes"){
        charTypes.push("Numeric");
      }
    }
  } 
  type = true;
  while(type){
    var special = prompt("Do you want to include special characters? (Yes/No)", "Yes");
    special = special.toLowerCase();
    if(special=="yes"||special=="no"){
      type = false;
      if(special=="yes"){
        charTypes.push("Special");
      }
    }
  } 

  var selectedType = "Lower";
  if(charTypes.length<=0){
    charTypes.push("Lower");
  }
  console.log(charTypes);

  var password = "";
  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var nums = "0123456789";
  var specialChars = "!'#$%&()*+,-./:;<=>?@[]^_`}|{~";

  for (let index = 0; index < pLength; index++) {
    selectedType = charTypes[Math.floor(Math.random()*charTypes.length)];

    switch(selectedType) {
      case "Lower":
        password += (chars.charAt(Math.floor(Math.random() * chars.length))).toLowerCase();
        break;
      case "Upper":
        password += chars.charAt(Math.floor(Math.random() * chars.length));
        break;
      case "Numeric":
        password += nums.charAt(Math.floor(Math.random() * nums.length));
        break;
      case "Special":
        password += specialChars.charAt(Math.floor(Math.random() * specialChars.length));
        break;
    }
  }
  console.log(password);
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
