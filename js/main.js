let email = document.getElementById("email");
let emailValue = "";
let regEx = /\S+@\S+\.\S+/;
let submit = document.getElementById("submit");

submit.addEventListener("click", submitEmail);

function submitEmail() {
  if (validateEmail === true) 
    document.querySelector("#submitted") = enabled;
  }

function validateEmail() {
  if (email) {
    emailValue = email.value;
  }
  if (regEx.test(emailValue) !== true) {
    document.querySelector("#errorMessage").style.visibility = "visible";
    document.querySelector("#errorIcon").style.visibility = "visible";
  } else 
    return true;
} 


  