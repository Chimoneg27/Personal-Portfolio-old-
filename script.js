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

const closePopUpHandler = (event) => {
  event.preventDefault();
  overlay.classList.add('hidden-g');
};

const renderPopUp = (e) => {
  e.preventDefault();
  popups.innerHTML = '';
  overlay.classList.remove('hidden-g');
  const id = e.target.dataset.show;
  const [templateMakeup] = projectData.filter((item) => item.id === id);
  const markUp = ` 
  <div class="modal" id="modal">
    <div class="modal-header">
      <div class="title-modal">${templateMakeup.title}</div>
      <span class="title2">Keeping track of hundreds of components website</span>
      <button class="close-button" onclick="overlayOff()">&times;</button>
    </div>      
    
    <ul class="modal-list">
        <li>${templateMakeup.skills.skill1}</li>
        <li>${templateMakeup.skills.skill2}</li>
        <li>${templateMakeup.skills.skill1}</li>
      </ul>
  <div class="modal-body">
    <div class="side-left">
      <img src="${templateMakeup.img}" alt="modal-img-mobile">
      <img src="images/desktop/Snapshoot Portfoliomodal-desktop.png" alt="desktop-modal-img">
    </div>
    <div class="side-right">
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent
      </p>
      <br>
      <p class="paragraph-2">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essential.
      </p>
    
      <div class="modal-btns">
      <a href="https://chimoneg27.github.io/Personal-Portfolio/"><button>${templateMakeup.button1}<img src="images/Icon-modal-btn.svg" alt="see-live-icon"></button></a>
      <a href="https://github.com/Chimoneg27/Personal-Portfolio"><button>${templateMakeup.button2}<img src="images/Icon-modal-btn.svg" alt="see-live-icon"></button></a>
      </div>
    </div>
  </div>
  `;
  popups.insertAdjacentHTML('afterbegin', markUp);
  closePopUp = document.querySelector('.close-button');
  closePopUp.addEventListener('click', closePopUpHandler);
};

showPopups.forEach((btn) => {
  btn.addEventListener('click', renderPopUp);
});
function overLay() {
  document.getElementById("over-lay").style.display = "block";
}
function overlayOff() {
  document.getElementById("over-lay").style.display = "none";
}
