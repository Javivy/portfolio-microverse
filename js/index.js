/* eslint-disable no-undef */
/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
import createPopupProject from './modules/createPopupProject.js';
import { formListener, displayData } from './modules/form.js';
import projectObj from './modules/projectsObj.js';

window.sr = ScrollReveal();

const openMenuBtn = document.querySelector('.open-menu-btn');
const closeMenuBtn = document.querySelector('.close-menu-btn');
const mobileMenu = document.querySelector('.visible');
const mobileNav = document.querySelector('.mobile-ul');
const projectsContainer = document.querySelector('.projects');
const menuBtns = document.querySelectorAll('.menu-btn');
const form = document.getElementById('contact');

sr.reveal('.about-myself', {
  duration: 2000,
  origin: 'top',
  distance: '100px',
});

sr.reveal('.headline-title', {
  duration: 2500,
  origin: 'right',
  distance: '50px',
  delay: 300,
});

sr.reveal(form, {
  duration: 2000,
  origin: 'left',
  distance: '150px',
  delay: 200,
});

const projectData = projectObj();

function createProject(index) {
  const { name, mobileSnapshot, technologies } = projectData[index];
  const projectSample = document.createElement('div');
  const projectDetails = document.createElement('div');
  const projectName = document.createElement('h3');
  const projectUl = document.createElement('ul');
  const seeProjectBtn = document.createElement('button');

  projectSample.classList.add('project-sample');
  projectDetails.classList.add('details');
  projectUl.classList.add('tech-used');
  seeProjectBtn.classList.add('green-btn', 'popup-open-btn');

  projectName.textContent = name;
  seeProjectBtn.textContent = 'See Project';

  projectSample.style.backgroundImage = `url('../${mobileSnapshot}')`;
  projectSample.style.backgroundPosition = 'center';
  projectSample.style.backgroundSize = 'cover';

  seeProjectBtn.type = 'button';
  seeProjectBtn.id = `project-${index}`;

  for (let i = 0; i < technologies.length; i++) {
    const projectLi = document.createElement('li');
    const a = document.createElement('a');

    projectLi.classList.add('tech-used-item');

    a.setAttribute('href', '#');
    a.textContent = technologies[i];
    projectLi.append(a);
    projectUl.append(projectLi);
  }

  projectDetails.append(projectName, projectUl, seeProjectBtn);
  projectSample.append(projectDetails);
  projectsContainer.append(projectSample);
  return projectsContainer;
}

const enableScroll = () => {
  window.onscroll = () => {};
};

const displayCourse = () => {
  projectData.forEach((_, index) => {
    createProject(index);
  });
};

displayCourse();

const disableScroll = () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

  window.onscroll = () => {
    window.scrollTo(scrollLeft, scrollTop);
  };
};

const openPopup = (id) => {
  const pop = createPopupProject(id);
  pop.style.animation = 'slide-up 0.5s forwards ease-in-out';
  projectsContainer.append(pop);
  disableScroll();
};

openMenuBtn.addEventListener('click', () => {
  mobileMenu.style.display = 'block';
  disableScroll();
  mobileNav.style.zIndex = '-1';
});

closeMenuBtn.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
  enableScroll();
  mobileNav.style.zIndex = '1';
});

document.addEventListener('click', (event) => {
  const { id } = event.target;
  const regex = /(?<=project-)\d+$/;
  if (regex.test(id)) {
    const index = id.match(regex)[0];
    openPopup(index);
  }
});

const openMenu = () => {
  mobileMenu.style.display = 'block';
};

const closeMenu = () => {
  mobileMenu.style.display = 'none';
  enableScroll();
};

menuBtns.forEach((c) => {
  c.addEventListener('click', closeMenu);
});

displayData();
formListener();
