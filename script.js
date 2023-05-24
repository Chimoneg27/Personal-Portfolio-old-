const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.
    addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
}))

const fullName = document.querySelector('#fullName');
const email = document.querySelector('#email-input');
const textInput = document.querySelector('#textArea');

const savedInfo = JSON.parse(localStorage.getItem('myFormInfo'));
if (savedInfo) {
  fullName.value = savedInfo.name;
  email.value = savedInfo.email;
  textInput.value = savedInfo.message;
}

function saveFormInfo() {
    const myFormInfo = {
      name: fullName.value,
      email: email.value,
      text: textInput.value,
    }
    localStorage.setItem('myFormInfo', JSON.stringify(myFormInfo));
  };
  
  fullName.addEventListener('input', saveFormInfo);
  email.addEventListener('input', saveFormInfo);
  textInput.addEventListener('input', saveFormInfo);