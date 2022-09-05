const openMenuBtn = document.querySelector('.open-menu-btn');
const closeMenuBtn = document.querySelector('.close-menu-btn');
const mobileMenu = document.querySelector('.visible');
const mobileNav = document.querySelector('.mobile-ul');
const width = document.innerWidth();

if (width < 768) {
  openMenuBtn.addEventListener('click', () => {
    mobileMenu.style.display = 'block';
    mobileNav.style.display = 'none';
  });

  closeMenuBtn.addEventListener('click', () => {
    mobileMenu.style.display = 'none';
    mobileNav.style.display = 'flex';
  });
}
