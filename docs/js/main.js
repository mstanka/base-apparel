let email = document.getElementById("email");
let emailValue = "";
let regEx = /\S+@\S+\.\S+/;
let form = document.getElementById("form");

form.addEventListener("click", validateEmail);

function validateEmail() {
  if (email) {
    emailValue = email.value;
  }
  if (regEx.test(emailValue) !== true || emailValue.length === 0) {
    document.querySelector("#errorMessage").style.visibility = "visible";
    document.querySelector("#errorIcon").style.visibility = "visible";
    document.querySelector("#email").style.border = "red solid 1px";
    return false;
  } else 
    return true;
} 


  