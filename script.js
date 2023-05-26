const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const modal = document.getElementById('modal-box');

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
    button1: 'See live',
    button2: 'See source',
  },
  {
    id: '2',
    title: 'Multi Post Stories',
    description:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum neque dolorem voluptatum. Eum adipisci omnis dolores ab est nobis at   repudiandae consequatur eaque dolorem! Nostrum dolorem aspernatur debitis perferendis quis. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae iste ipsa error esse eum veritatis, nihil',
    skills: { skill1: 'HTML', skill2: 'Bootstrap', skill3: 'Ruby on rails' },
    img: './images/Snapshoot Portfolio.png',
    button1: 'See live',
    button2: 'See source',
  },
  {
    id: '3',
    title: 'Multi Post Stories',
    description:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum neque dolorem voluptatum. Eum adipisci omnis dolores ab est nobis at   repudiandae consequatur eaque dolorem! Nostrum dolorem aspernatur debitis perferendis quis. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae iste ipsa error esse eum veritatis, nihil',
    skills: { skill1: 'HTML', skill2: 'Bootstrap', skill3: 'Ruby on rails' },
    img: './images/Snapshoot Portfolio.png',
    button1: 'See live',
    button2: 'See source',
  },
  {
    id: '4',
    title: 'Multi Post Stories',
    description:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum neque dolorem voluptatum. Eum adipisci omnis dolores ab est nobis at   repudiandae consequatur eaque dolorem! Nostrum dolorem aspernatur debitis perferendis quis. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae iste ipsa error esse eum veritatis, nihil',
    skills: { skill1: 'HTML', skill2: 'Bootstrap', skill3: 'Ruby on rails' },
    img: './images/Snapshoot Portfolio.png',
    button1: 'See live',
    button2: 'See source',
  },
  {
    id: '5',
    title: 'Multi Post Stories',
    description:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum neque dolorem voluptatum. Eum adipisci omnis dolores ab est nobis at   repudiandae consequatur eaque dolorem! Nostrum dolorem aspernatur debitis perferendis quis. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae iste ipsa error esse eum veritatis, nihil',
    skills: { skill1: 'HTML', skill2: 'Bootstrap', skill3: 'Ruby on rails' },
    img: './images/Snapshoot Portfolio.png',
    button1: 'See live',
    button2: 'See source',
  },
  {
    id: '6',
    title: 'Multi Post Stories',
    description:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum neque dolorem voluptatum. Eum adipisci omnis dolores ab est nobis at   repudiandae consequatur eaque dolorem! Nostrum dolorem aspernatur debitis perferendis quis. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae iste ipsa error esse eum veritatis, nihil',
    skills: { skill1: 'HTML', skill2: 'Bootstrap', skill3: 'Ruby on rails' },
    img: './images/Snapshoot Portfolio.png',
    button1: 'See live',
    button2: 'See source',
  },
];

function overLay() {
  document.getElementById('over-lay').style.display = 'block';
  modal.style.display = 'block';
}

function overlayOff() {
  document.getElementById('over-lay').style.display = 'none';
  modal.style.display = 'none';
}

const projectsContainer = document.getElementById('projects-container');

const projectCards = [
  {
    class: 'projects',
    heading: 'Profesional Art Printing Data More',
    details: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industrys standard.',
    skills: { skill1: 'HTML', skill2: 'Bootstrap', skill3: 'Ruby' },
  },
  {
    class: 'projects',
    heading: 'Data Dashboard Healthcare',
    details: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industrys standard.',
    skills: { skill1: 'HTML', skill2: 'Bootstrap', skill3: 'Ruby' },
  },
  {
    class: 'projects',
    heading: 'Website Portfolio',
    details: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industrys standard.',
    skills: { skill1: 'HTML', skill2: 'Bootstrap', skill3: 'Ruby' },
  },
  {
    class: 'projects',
    heading: 'Profesional Art Printing Data More',
    details: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industrys standard.',
    skills: { skill1: 'HTML', skill2: 'Bootstrap', skill3: 'Ruby' },
  },
  {
    class: 'projects',
    heading: 'Data Dashboard Healthcare',
    details: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industrys standard.',
    skills: { skill1: 'HTML', skill2: 'Bootstrap', skill3: 'Ruby' },
  },
  {
    class: 'projects',
    heading: 'Website Portfolio',
    details: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industrys standard.',
    skills: { skill1: 'HTML', skill2: 'Bootstrap', skill3: 'Ruby' },
  },
];

function addCards(projectsArr) {
  let cards = '';
  for (let i = 0; i < projectsArr.length; i += 1) {
    cards += `
    <div class="${projectsArr[i].class}">
    <h3>${projectsArr[i].heading}</h3>
    <p>
      ${projectsArr[i].details}
    </p>

    <div class="project-tags">
      <ul>
        <li>${projectsArr[i].skills.skill1}</li>
        <li>${projectsArr[i].skills.skill2}</li>
        <li>${projectsArr[i].skills.skill3}</li>
      </ul>
    </div>

    <button type="submit" value="submit" data-show="1" class="show-project" onclick="overLay()">See project</button>
    </div>
    `;
  }
  return cards;
}

projectsContainer.innerHTML = `
  ${addCards(projectCards)}
`;

function addPopUp(modalArr) {
  let boxes = '';
  boxes = `
    <div class="modal" id="modal">
    <div class="modal-header">
      <div class="title-modal">${modalArr[0].title}</div>
      <span class="title2">Keeping track of hundreds of components website</span>
      <button class="close-button" onclick="overlayOff()">&times;</button>
    </div>      
    
    <ul class="modal-list">
        <li>${modalArr[0].skills.skill1}</li>
        <li>${modalArr[0].skills.skill2}</li>
        <li>${modalArr[0].skills.skill1}</li>
      </ul>
  <div class="modal-body">
    <div class="side-left">
      <img src="${modalArr[0].img}" alt="modal-img-mobile">
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
      <a href="https://chimoneg27.github.io/Personal-Portfolio/"><button>${modalArr[0].button1}<img src="images/Icon-modal-btn.svg" alt="see-live-icon"></button></a>
      <a href="https://github.com/Chimoneg27/Personal-Portfolio"><button>${modalArr[0].button2}<img src="images/Vectorgithub.svg" alt="github-icon"></button></a>
      </div>
    </div>
  </div>
    `;
  return boxes;
}

modal.innerHTML = `
${addPopUp(projectData)}
`;

overLay();
overlayOff();
