let email = document.getElementById("email");
let emailValue = "";
let regEx = /\S+@\S+\.\S+/;
// let form = document.getElementById("submitted");

// form.addEventListener("click", submitEmail);

// function submitEmail() {
//   if (validateEmail === true) 
//   form.action = enabled;
//   }

function validateEmail() {
  if (email) {
    emailValue = email.value;
  }
  if (regEx.test(emailValue) !== true) {
    document.querySelector("#errorMessage").style.visibility = "visible";
    document.querySelector("#errorIcon").style.visibility = "visible";
    document.querySelector("#email").style.border = "red solid 1px";
  } else 
    return true;
} 


  