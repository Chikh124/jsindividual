const btn = document.querySelector('.header__menu-burger');
const menu = document.querySelector('.header__nav');
btn.addEventListener('click', () => {
  menu.classList.toggle('active');
});
