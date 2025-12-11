const triggerBtns = document.querySelectorAll('.js-trigger');
const profileCard = document.querySelector('.js-profile-card');

triggerBtns.forEach(btn =>
  btn.addEventListener('click', toggleActiveProfileCard)
);

function toggleActiveProfileCard() {
  profileCard.classList.toggle('active');
}
