/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
const openMenuBtn = document.querySelector('.open-menu-btn');
const closeMenuBtn = document.querySelector('.close-menu-btn');
const mobileMenu = document.querySelector('.visible');
const mobileNav = document.querySelector('.mobile-ul');
const projectsContainer = document.querySelector('.projects');
const popupOpenBtn = document.querySelector('.popup-open-btn');
const popupCloseBtn = document.querySelector('.popup-close-btn');
const form = document.getElementById('contact');
const emailForm = document.getElementById('email-address');
const emailError = document.querySelector('.form-error');
const formBtn = document.querySelector('.form-btn');

const projectData = [
  {
    name: 'Multi-Post stories Gain+Glory',
    title: 'Project 1',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    mobileSnapshot: 'images/snapshot-portfolio-mobile.png',
    desktopSnapshot: 'images/Snapshoot-Portfolio.png',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    linkLiveServer: '#',
    linkSource: '#',
  },

  {
    name: 'Multi-Post stories Gain+Glory',
    title: 'Project 2',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    mobileSnapshot: 'images/snapshot-portfolio-mobile.png',
    desktopSnapshot: 'images/Snapshoot-Portfolio.png',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    linkLiveServer: '#',
    linkSource: '#',
  },

  {
    name: 'Multi-Post stories Gain+Glory',
    title: 'Project 3',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    mobileSnapshot: 'images/snapshot-portfolio-mobile.png',
    desktopSnapshot: 'images/Snapshoot-Portfolio.png',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    linkLiveServer: '#',
    linkSource: '#',
  },

  {
    name: 'Multi-Post stories Gain+Glory',
    title: 'Project 4',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    mobileSnapshot: 'images/snapshot-portfolio-mobile.png',
    desktopSnapshot: 'images/Snapshoot-Portfolio.png',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    linkLiveServer: '#',
    linkSource: '#',
  },

  {
    name: 'Multi-Post stories Gain+Glory',
    title: 'Project 5',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    mobileSnapshot: 'images/snapshot-portfolio-mobile.png',
    desktopSnapshot: 'images/Snapshoot-Portfolio.png',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    linkLiveServer: '#',
    linkSource: '#',
  },

  {
    name: 'Multi-Post stories Gain+Glory',
    title: 'Project 6',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    mobileSnapshot: 'images/snapshot-portfolio-mobile.png',
    desktopSnapshot: 'images/Snapshoot-Portfolio.png',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    linkLiveServer: '#',
    linkSource: '#',
  },
];

function createProject(index) {
  const { name, technologies } = projectData[index];
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

const createPopupProject = (id) => {
  const {
    title,
    desktopSnapshot,
    mobileSnapshot,
    description,
    technologies,
    linkLiveServer,
    linkSource,
  } = projectData[id];
  const popupProject = document.createElement('div');
  const popupProjectContainer = document.createElement('div');
  const popupCloseBtn = document.createElement('div');
  const popupCloseBtnIcon = document.createElement('img');
  const popupImgContainerMobile = document.createElement('div');
  const popupImgContainerDesktop = document.createElement('div');
  const popupSnapshotMobile = document.createElement('img');
  const popupSnapshotDesktop = document.createElement('img');
  const popupHeader = document.createElement('div');
  const popupTitle = document.createElement('h4');
  const popupBtnsDesktop = document.createElement('div');
  const popupBtnLive = document.createElement('a');
  const popupLiveIcon = document.createElement('img');
  const popupBtnSource = document.createElement('a');
  const popupSourceIcon = document.createElement('img');
  const popupUl = document.createElement('ul');
  const popupDescription = document.createElement('p');
  const popupBtnsMobile = document.createElement('div');

  popupProject.classList.add('popup-project');
  popupProjectContainer.classList.add('popup-project-container');
  popupCloseBtn.classList.add('popup-close');
  popupImgContainerMobile.classList.add('project-img-container', 'mobile-snapshot');
  popupImgContainerDesktop.classList.add('project-img-container', 'desktop-snapshot');
  popupHeader.classList.add('popup-header');
  popupBtnsDesktop.classList.add('popup-btns-container-desktop');
  popupBtnLive.classList.add('green-btn', 'popup-btn');
  popupBtnSource.classList.add('green-btn', 'popup-btn');
  popupUl.classList.add('tech-used-popup');
  popupBtnsMobile.classList.add('popup-btns-container-mobile');

  popupTitle.textContent = title;
  popupBtnLive.textContent = 'See live';
  popupBtnSource.textContent = 'See Source';
  popupDescription.textContent = description;

  for (let i = 0; i < technologies.length; i++) {
    const popupLi = document.createElement('li');
    const a = document.createElement('a');

    popupLi.classList.add('tech-used-item');

    a.setAttribute('href', '#');
    a.textContent = technologies[i];
    popupLi.append(a);
    popupUl.append(popupLi);
  }

  popupCloseBtnIcon.setAttribute('src', 'icons/close-menu-icon.svg');
  popupSnapshotMobile.setAttribute('src', mobileSnapshot);
  popupSnapshotDesktop.setAttribute('src', desktopSnapshot);
  popupLiveIcon.setAttribute('src', 'icons/live-server-icon.svg');
  popupSourceIcon.setAttribute('src', 'icons/github-icon.svg');
  popupCloseBtn.setAttribute('onclick', 'closePopup()');
  popupBtnLive.setAttribute('onclick', 'closePopup()');
  popupBtnSource.setAttribute('onclick', 'closePopup()');
  popupBtnLive.setAttribute('href', linkLiveServer);
  popupBtnSource.setAttribute('href', linkSource);

  popupCloseBtn.append(popupCloseBtnIcon);
  popupImgContainerMobile.append(popupSnapshotMobile);
  popupImgContainerDesktop.append(popupSnapshotDesktop);
  popupBtnLive.append(popupLiveIcon);
  popupBtnSource.append(popupSourceIcon);
  popupBtnsDesktop.innerHTML = `
  <a class="green-btn popup-btn" onclick="closePopup()" href="#">
  See live <img src="icons/live-server-icon.svg"/>
  </a>
  <a class="green-btn popup-btn" onclick="closePopup()" href="#">
  See Source <img src="icons/github-icon.svg"/>
  </a>
  `;
  popupHeader.append(popupTitle, popupBtnsDesktop);
  popupBtnsMobile.append(popupBtnLive, popupBtnSource);
  popupProjectContainer.append(
    popupCloseBtn,
    popupImgContainerMobile,
    popupImgContainerDesktop,
    popupHeader,
    popupUl,
    popupDescription,
    popupBtnsMobile,
  );
  popupProject.append(popupProjectContainer);

  return popupProject;
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

const enableScroll = () => {
  window.onscroll = () => {};
};

const openPopup = (id) => {
  const pop = createPopupProject(id);
  projectsContainer.append(pop);
  disableScroll();
};

const closePopup = () => {
  const popupProject = document.querySelector('.popup-project');
  popupProject.remove();
  enableScroll();
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

function validateEmail(email) {
  if (!email.checkValidity()) {
    emailError.classList.remove('error-visible');
    return false;
  }
  emailError.classList.add('error-visible');
  return true;
}

formBtn.addEventListener('click', () => {
  validateEmail(emailForm);
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (validateEmail(emailForm)) {
    form.submit();
  }
});
