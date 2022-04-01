// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function generatePassword(){
  var lowerC="abcdefghijklmnopqrstuvwxyz";
  var upperC="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numC="0123456789";
  var specC="!@##$%^&*()";
  var lowerArray= lowerC.split("");
  var upperArray= upperC.split("");
  var numArray= numC.split("");
  var specArray= specC.split("");

  for (var i=0; i==0;){
    var sLength = prompt("How may characters long do you want your password?");
    var iLength = parseInt(sLength);
    if(iLength>= 8 && sLength.length<= 128){
        i++;
      } else{
        alert("You must enter a length between 8 and 128");
      }
    }

  for (var i=0; i==0;){
    var upper= confirm("Include uppercase letters?");
    var lower= confirm("Include lowercase letters?");
    var numeric= confirm("Include numeric characters?");
    var special= confirm("Include special characters?");
    if(
      upper==false &&
      lower==false &&
      numeric==false &&
      special==false){
      alert("You need to make at least one selection");
    } else{
      i++;
    }
  }
  var selections=[upper, lower, numeric, special];
  var bank=[];
  for(i=0; i<selections.length;i++){
    if(selections[i]==true && i==0){
      bank.push(...upperArray);
    } else if(selections[i]==true && i==1){
      bank.push(...lowerArray);
    } else if(selections[i]==true && i==2){
      bank.push(...numArray);
    } else if(selections[i]==true && i==3){
      bank.push(...specArray);
    }
  }
  var pass="";
  for(i=0;i<iLength;i++){
    pass+= bank[Math.floor(Math.random() * (bank.length-1))];
  }
  return pass;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
