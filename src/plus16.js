let Button = document.querySelector("button");

function JoinUs() {
  let name = prompt("what is your name?");
  let age = prompt("How old are you?");

  if (age >= 18) {
    alert(`Welcome to SheCodes ${name}`);
  } else {
    alert(`Sorry you cannot join now ${name}`);
  }
}

Button.addEventListener("click", JoinUs);
