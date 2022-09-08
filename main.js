/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
const openMenuBtn = document.querySelector('.open-menu-btn');
const closeMenuBtn = document.querySelector('.close-menu-btn');
const mobileMenu = document.querySelector('.visible');
const mobileNav = document.querySelector('.mobile-ul');
const projectsContainer = document.querySelector('.projects');
const popupOpenBtn = document.querySelector('popup-open-btn');
const popupCloseBtn = document.querySelector('popup-close-btn');
const popupProject = document.querySelector('popup-project');

const projectData = [
  {
    name: 'Multi-Post stories Gain+Glory',
    title: 'Keeping track of hundreds of components',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage: 'images/Snapshoot-Portfolio.png',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    linkLiveServer: '#',
    linkSource: '#',
  },

  {
    name: 'Multi-Post stories Gain+Glory',
    title: 'Keeping track of hundreds of components',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage: 'images/Snapshoot-Portfolio.png',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    linkLiveServer: '#',
    linkSource: '#',
  },

  {
    name: 'Multi-Post stories Gain+Glory',
    title: 'Keeping track of hundreds of components',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage: 'images/Snapshoot-Portfolio.png',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    linkLiveServer: '#',
    linkSource: '#',
  },

  {
    name: 'Multi-Post stories Gain+Glory',
    title: 'Keeping track of hundreds of components',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage: 'images/Snapshoot-Portfolio.png',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    linkLiveServer: '#',
    linkSource: '#',
  },

  {
    name: 'Multi-Post stories Gain+Glory',
    title: 'Keeping track of hundreds of components',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage: 'images/Snapshoot-Portfolio.png',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    linkLiveServer: '#',
    linkSource: '#',
  },

  {
    name: 'Multi-Post stories Gain+Glory',
    title: 'Keeping track of hundreds of components',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage: 'images/Snapshoot-Portfolio.png',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    linkLiveServer: '#',
    linkSource: '#',
  },
];

const createProject = (nameValue, technologiesValues) => {
  const projectSample = document.createElement('div');
  const projectDetails = document.createElement('div');
  const projectName = document.createElement('h3');
  const projectUl = document.createElement('ul');
  const seeProjectBtn = document.createElement('button');

  projectSample.classList.add('project-sample');
  projectDetails.classList.add('details');
  projectUl.classList.add('tech-used');
  seeProjectBtn.classList.add('green-btn', 'open-popup');

  projectName.textContent = nameValue;
  seeProjectBtn.textContent = 'See Project';

  seeProjectBtn.type = 'button';

  for (let i = 0; i < technologiesValues.length; i++) {
    const projectLi = document.createElement('li');
    const a = document.createElement('a');

    projectLi.classList.add('tech-used-item');

    a.setAttribute('href', '#');
    a.textContent = technologiesValues[i];
    projectLi.append(a);
    projectUl.append(projectLi);
  }

  projectDetails.append(projectName, projectUl, seeProjectBtn);
  projectSample.append(projectDetails);
  projectsContainer.append(projectSample);
  return projectsContainer;
};

// const createPopupProject = (
//   titleValue,
//   imageValue,
//   descriptionValue,
//   technologiesValues,
//   liveServerValue,
//   sourceValue,
// ) => {

// }

const displayCourse = () => {
  projectData.forEach((c) => {
    createProject(c.name, c.technologies);
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

const enableScroll = () => {
  window.onscroll = () => {};
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

const openMenu = () => {
  mobileMenu.style.display = 'block';
};

const openPopup = () => {
  popupProject.style.display = 'block';
  popupProject.style.zIndex = '4';
};

const closeMenu = () => {
  mobileMenu.style.display = 'none';
  enableScroll();
};

const closePopup = () => {
  popupProject.style.display = 'none';
  popupProject.style.zIndex = '-1';
  enableScroll();
};
