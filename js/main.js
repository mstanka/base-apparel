let email = document.getElementById("email");
let emailValue = "";
let regEx = /\S+@\S+\.\S+/;

function validateEmail() {
  if (email) {
    emailValue = email.value;
  }
  if (regEx.test(emailValue) !== true) {
    document.querySelector("#errorMessage").style.visibility = "visible";
    document.querySelector("#errorIcon").style.visibility = "visible";
  } 
}