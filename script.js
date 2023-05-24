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

const projectContainer = document.querySelector(".dynamic-container");
const projectSection = document.createElement('div');
projectContainer.appendChild(projectSection);
projectSection.innerHTML = `
<section id="works-container">
<div class="works-title">
  <h2>My Recent Works</h2>

  <div class="works-title-img">
    <img
      src="images/desktop/Vector liine-1.svg"
      alt="desktop-title-line"
    />
  </div>
</div>

<div>
  <img src="images/Vectorline.svg" alt="line-svg" id="mobile-line" />
</div>

<div id="post-stories">
  <div id="yoga-post">
    <img
      src="images/Img Placeholderyoga-image.png"
      alt="post-yoga-img"
      id="mobile-yoga"
    />
  </div>

  <div id="text-info">
    <div id="stories-title">
      <h3>Multi-Post Stories</h3>
    </div>

    <div id="stories-text">
      <p>
        A daily selection of privately personalized reads; no accounts or
        sign-ups required. has been the industry's standard dummy text
        ever since the 1500s, when an unknown printer took a standard
        dummy text.
      </p>
    </div>

    <div id="stories-tags">
      <ul>
        <li>CSS</li>
        <li>HTML</li>
        <li>Bootstrap</li>
        <li>Ruby</li>
      </ul>
    </div>
      <button class="btn1" id="modal-works" onclick="modal1Open()";onclick="on()">See project</button>
      <div id="overlay"></div>
  </div>
</div>

<div id="projects-container">
  <div class="projects">
    <h3>
      Profesional Art Printing Data
      <span>Profesional Art Printing Data</span>
    </h3>
    <p>
      A daily selection of privately personalized reads; no accounts or
      sign-ups required. Has been the industry's standard.
    </p>

    <div class="project-tags">
      <ul>
        <li>HTML</li>
        <li>Bootstrap</li>
        <li>Ruby</li>
      </ul>
    </div>

    <button onclick="openPrjct1()">See project</button>
  </div>
  <div class="projects">
    <h3>
      Profesional Art Printing Data <span>Data Dashboard Healthcare</span>
    </h3>

    <p>
      A daily selection of privately personalized reads; no accounts or
      sign-ups required. Has been the industry's standard.
    </p>

    <div class="project-tags">
      <ul>
        <li>HTML</li>
        <li>Bootstrap</li>
        <li>Ruby</li>
      </ul>
    </div>

    <button onclick="openPrjct1()">See project</button>
  </div>
  <div class="projects">
    <h3>Profesional Art Printing Data <span>Website Portfolio</span></h3>

    <p>
      A daily selection of privately personalized reads; no accounts or
      sign-ups required. Has been the industry's standard.
    </p>

    <div class="project-tags">
      <ul>
        <li>HTML</li>
        <li>Bootstrap</li>
        <li>Ruby</li>
      </ul>
    </div>

    <button onclick="openPrjct1()">See project</button>
  </div>
  <div class="projects">
    <h3>
      Profesional Art Printing Data
      <span>Profesional Art Printing Data</span>
    </h3>

    <p>
      A daily selection of privately personalized reads; no accounts or
      sign-ups required. Has been the industry's standard.
    </p>

    <div class="project-tags">
      <ul>
        <li>HTML</li>
        <li>Bootstrap</li>
        <li>Ruby</li>
      </ul>
    </div>

    <button onclick="openPrjct1()">See project</button>
  </div>
  <div class="projects">
    <h3>
      Profesional Art Printing Data<span>Data Dashboard Healthcare</span>
    </h3>
    <p>
      A daily selection of privately personalized reads; no accounts or
      sign-ups required. Has been the industry's standard.
    </p>

    <div class="project-tags">
      <ul>
        <li>HTML</li>
        <li>Bootstrap</li>
        <li>Ruby</li>
      </ul>
    </div>
    <button onclick="openPrjct1()">See project</button>
  </div>
  <div class="projects">
    <h3>Profesional Art Printing Data<span>Website Portfolio</span></h3>
    <p>
      A daily selection of privately personalized reads; no accounts or
      sign-ups required. Has been the industry's standard.
    </p>

    <div class="project-tags">
      <ul>
        <li>HTML</li>
        <li>Bootstrap</li>
        <li>Ruby</li>
      </ul>
    </div>
    <button onclick="openPrjct1()">See project</button>
  </div>
</div>
</section>
`;

const modalOne = `
  <div class="modal" id="modal">
    <div class="modal-header">
      <div class="title-modal">Multi Post Stories</div>
      <span class="title2">Keeping track of hundreds of components website</span>
      <button class="close-button" onclick="modal1Close()">&times;</button>
    </div>
    <ul class="modal-list">
        <li>HTML</li>
        <li>Bootstrap</li>
        <li>Ruby on Rails</li>
      </ul>
  <div class="modal-body">
    <div class="side-left">
      <img src="images/Snapshoot Portfolio.png" alt="modal-img-mobile">
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
        <button>See live <img src="images/Icon-modal-btn.svg" alt="see-live-icon"></button>
        <button>See source <img src="images/Vector-modal-btn.svg" alt="modal-src"></button>
      </div>
    </div>
  </div>
`;

const worksContainer = document.querySelector(".dynamic-container");
const worksModal = document.createElement('div');
worksModal.innerHTML = modalOne;
worksModal.classList.add('close-one');

function modal1Open() {
  worksContainer.prepend(worksModal);
  worksModal.classList.remove('close-one');
  worksModal.classList.add('.modal-box');
  document.body.classList.add('modal-active');
  document.getElementById("overlay").style.display = "block";
}

function modal1Close() {
    worksModal.classList.remove('.modal-box');
    worksModal.classList.add('close-one');
    worksContainer.removeChild(worksModal);
    document.body.classList.remove('modal-active');
    document.getElementById("overlay").style.display = "none";
  }
  
  const prjctOneModal = `
  <div class="modal" id="prjct-1-modal">
  <div class="modal-header">
    <div class="title-modal">Multi Post Stories</div>
    <span class="title2">Keeping track of hundreds of components website</span>
    <button class="close-button" onclick="closePrjct1()">&times;</button>
  </div>      
  
  <ul class="modal-list">
      <li>HTML</li>
      <li>Bootstrap</li>
      <li>Ruby on Rails</li>
    </ul>
  <div class="modal-body">
  <div class="side-left">
    <img src="images/Snapshoot Portfolio.png" alt="modal-img-mobile">
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
      <button>See live <img src="images/Icon-modal-btn.svg" alt="see-live-icon"></button>
      <button>See source <img src="images/Vector-modal-btn.svg" alt="modal-src"></button>
    </div>
  </div>
  </div>
  `
  const projectOne = document.createElement('div');
  projectOne.innerHTML = prjctOneModal;
  projectOne.classList.add('close-one');