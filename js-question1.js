const form = document.querySelector("#contactForm");

const firstName = document.querySelector("#firstName");
const firstNameError = document.querySelector("#firstNameError");
let nameError = false;

form.addEventListener("submit", validateForm);

function validateForm() {
  event.preventDefault();

  //test name
  const firstNameValue = firstName.value;

  if (validateLength(firstNameValue, 2) === true) {
    firstNameError.style.display = "none";
    nameError = false;
  } else {
    firstNameError.style.display = "block";
    nameError = true;
  }
}

function validateLength(value, lengthToCheck) {
  const trimmedValue = value.trim();

  if (trimmedValue.length >= lengthToCheck) {
    return true;
  } else {
    return false;
  }
}
