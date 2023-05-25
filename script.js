const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const popups = document.querySelector('.popup');
const overlay = document.querySelector('.overlay');
const showPopups = document.querySelectorAll('.show-project');
let closePopUp;

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

const projectData = [
  {
    id: '1',
    title: 'Multi Post Stories',
    description:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum neque dolorem voluptatum. Eum adipisci omnis dolores ab est nobis at   repudiandae consequatur eaque dolorem! Nostrum dolorem aspernatur debitis perferendis quis. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae iste ipsa error esse eum veritatis, nihil',
    skills: { skill1: 'HTML', skill2: 'Bootstrap', skill3: 'Ruby on rails' },
    img: './images/Snapshoot Portfolio.png',
    button1: "See live",
    button2: "See source"
  },
  {
    id: '2',
    title: 'Multi Post Stories',
    description:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum neque dolorem voluptatum. Eum adipisci omnis dolores ab est nobis at   repudiandae consequatur eaque dolorem! Nostrum dolorem aspernatur debitis perferendis quis. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae iste ipsa error esse eum veritatis, nihil',
    skills: { skill1: 'HTML', skill2: 'Bootstrap', skill3: 'Ruby on rails' },
    img: './images/Snapshoot Portfolio.png',
    button1: "See live",
    button2: "See source"
  },
  {
    id: '3',
    title: 'Multi Post Stories',
    description:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum neque dolorem voluptatum. Eum adipisci omnis dolores ab est nobis at   repudiandae consequatur eaque dolorem! Nostrum dolorem aspernatur debitis perferendis quis. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae iste ipsa error esse eum veritatis, nihil',
    skills: { skill1: 'HTML', skill2: 'Bootstrap', skill3: 'Ruby on rails' },
    img: './images/Snapshoot Portfolio.png',
    button1: "See live",
    button2: "See source"
  },
  {
    id: '4',
    title: 'ProfeMulti Post Stories',
    description:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum neque dolorem voluptatum. Eum adipisci omnis dolores ab est nobis at   repudiandae consequatur eaque dolorem! Nostrum dolorem aspernatur debitis perferendis quis. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae iste ipsa error esse eum veritatis, nihil',
    skills: { skill1: 'HTML', skill2: 'Bootstrap', skill3: 'Ruby on rails' },
    img: './images/Snapshoot Portfolio.png',
    button1: "See live",
    button2: "See source"
  },
  {
    id: '5',
    title: 'Multi Post Stories',
    description:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum neque dolorem voluptatum. Eum adipisci omnis dolores ab est nobis at   repudiandae consequatur eaque dolorem! Nostrum dolorem aspernatur debitis perferendis quis. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae iste ipsa error esse eum veritatis, nihil',
    skills: { skill1: 'HTML', skill2: 'Bootstrap', skill3: 'Ruby on rails' },
    img: './images/Snapshoot Portfolio.png',
    button1: "See live",
    button2: "See source"
  },
  {
    id: '6',
    title: 'Multi Post Stories',
    description:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum neque dolorem voluptatum. Eum adipisci omnis dolores ab est nobis at   repudiandae consequatur eaque dolorem! Nostrum dolorem aspernatur debitis perferendis quis. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae iste ipsa error esse eum veritatis, nihil',
    skills: { skill1: 'HTML', skill2: 'Bootstrap', skill3: 'Ruby on rails' },
    img: './images/Snapshoot Portfolio.png',
    button1: "See live",
    button2: "See source"
  },
];
