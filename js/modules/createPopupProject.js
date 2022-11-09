import projectObj from './projectsObj.js';

const projectData = projectObj;

const enableScroll = () => {
  document.body.style.overflowY = 'auto';
};

const closePopup = () => {
  const popupProject = document.querySelector('.popup-project');
  popupProject.style.animation = 'slide-down 0.5s forwards ease-in-out';
  setTimeout(() => {
    popupProject.remove();
  }, 1000);
  enableScroll();
};

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

  popupBtnLive.setAttribute('target', '_blank');
  popupBtnSource.setAttribute('target', '_blank');

  for (let i = 0; i < technologies.length; i += 1) {
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
  popupBtnLive.setAttribute('href', linkLiveServer);
  popupBtnSource.setAttribute('href', linkSource);

  popupCloseBtn.append(popupCloseBtnIcon);
  popupImgContainerMobile.append(popupSnapshotMobile);
  popupImgContainerDesktop.append(popupSnapshotDesktop);
  popupBtnLive.append(popupLiveIcon);
  popupBtnSource.append(popupSourceIcon);
  const popupBtnLiveDesktop = popupBtnLive.cloneNode(true);
  const popupBtnSourceDesktop = popupBtnSource.cloneNode(true);
  popupBtnsDesktop.append(popupBtnLiveDesktop, popupBtnSourceDesktop);
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

  popupCloseBtn.addEventListener('click', closePopup);
  popupBtnLive.addEventListener('click', closePopup);
  popupBtnLiveDesktop.addEventListener('click', closePopup);
  popupBtnSourceDesktop.addEventListener('click', closePopup);
  popupBtnSource.addEventListener('click', closePopup);

  popupProject.append(popupProjectContainer);

  return popupProject;
};

export default createPopupProject;