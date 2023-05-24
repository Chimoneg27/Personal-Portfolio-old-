const form = document.getElementById("portfolio-form");
const emailInput = document.getElementById("email-input");
const submitBtn = document.getElementById("form-btn");
const errorMsg = document.getElementById("error-text");

form.addEventListener("submit", function(event) {
    if (emailInput.value === emailInput.value.toLowerCase()) {
      return true;
    } else {
      errorMsg.style.display = "block";
      event.preventDefault();
      return false;
    }
  });