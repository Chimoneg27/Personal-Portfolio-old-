const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((n) => n
  .addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  }));

const fullName = document.querySelector('#fullName');
const email = document.querySelector('#email-input');
const textarea = document.getElementById('textArea');

const savedInfo = JSON.parse(localStorage.getItem('myFormInfo'));

if (savedInfo) {
  fullName.value = savedInfo.name;
  email.value = savedInfo.email;
}

function saveFormInfo() {
  const myFormInfo = {
    name: fullName.value,
    email: email.value,
  };
  localStorage.setItem('myFormInfo', JSON.stringify(myFormInfo));
}

if (localStorage.getItem('textareaData')) {
  textarea.value = localStorage.getItem('textareaData');
}

textarea.addEventListener('input', () => {
  const data = textarea.value;
  localStorage.setItem('textareaData', data);
});

fullName.addEventListener('input', saveFormInfo);
email.addEventListener('input', saveFormInfo);
