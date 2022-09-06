const openMenuBtn = document.querySelector('.open-menu-btn');
const closeMenuBtn = document.querySelector('.close-menu-btn');
const mobileMenu = document.querySelector('.visible');
const mobileNav = document.querySelector('.mobile-ul');
const openProject = () => {
  projectPopUp.style.display = 'block';
}

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

// eslint-disable-next-line no-unused-vars
const openMenu = () => {
  mobileMenu.style.display = 'block';
};

// eslint-disable-next-line no-unused-vars
const closeMenu = () => {
  mobileMenu.style.display = 'none';
  enableScroll();
};
