//challenge 1
let hooray = document.querySelector("#special-button");

function Hooray(event) {
  event.preventDefault();
  alert("Hooray!");
}
hooray.addEventListener("click", Hooray);

//challenge 2
let password = document.querySelector("#password-input");

function alertPassword(event) {
  event.preventDefault();
  let passwordInput = password.value;
  alert(`Your password is ${passwordInput}`);
}
let submit = document.querySelector("#password-form");
submit.addEventListener("submit", alertPassword);

//challenge 3
let email = document.querySelector("#email-input");
let username = document.querySelector("#username-input");

function alertUser(event) {
  event.preventDefault();
  let userEmail = email.value;
  let userName = username.value;

  alert(`Your username is ${userName} and your email is ${userEmail}`);
}

let signup = document.querySelector("#signup-form");
signup.addEventListener("submit", alertUser);
