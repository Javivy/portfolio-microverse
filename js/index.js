/* eslint-disable no-undef */
/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
import createPopupProject from './modules/createPopupProject.js';
import createProject from './modules/createProject.js';
import { formListener, displayData } from './modules/form.js';
import projectObj from './modules/projectsObj.js';
import { enableScroll, disableScroll } from './modules/enableDisableScroll.js';

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

const projectData = projectObj;

const displayCourse = () => {
  projectData.forEach((_, index) => {
    createProject(index);
  });
};

displayCourse();

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

const closeMenu = () => {
  mobileMenu.style.display = 'none';
  enableScroll();
};

menuBtns.forEach((c) => {
  c.addEventListener('click', closeMenu);
});

displayData();
formListener();
