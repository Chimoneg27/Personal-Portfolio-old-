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