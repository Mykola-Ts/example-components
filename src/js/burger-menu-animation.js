const menuBtn = document.querySelector('.js-menu-btn');

menuBtn.addEventListener('click', handlerToggleMenu);

function handlerToggleMenu() {
  menuBtn.classList.toggle('open');
}
