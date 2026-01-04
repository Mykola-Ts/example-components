const quantity = 60;
const selectors = {
  btnWrapper: document.querySelector('.js-particle-btn-wrapper'),
  btn: document.querySelector('.js-particle-btn'),
};

let xCenter = 0;
let yCenter = 0;

updateButtonCenter();

window.addEventListener('resize', updateButtonCenter);

selectors.btn.addEventListener('click', handlerClickBtn);

function updateButtonCenter() {
  const btnRect = selectors.btn.getBoundingClientRect();
  const wrapperRect = selectors.btnWrapper.getBoundingClientRect();

  xCenter = btnRect.left - wrapperRect.left + btnRect.width / 2;
  yCenter = btnRect.top - wrapperRect.top + btnRect.height / 2;
}

function handlerClickBtn() {
  document.querySelectorAll('particle').forEach(p => p.remove());

  for (let i = 0; i < quantity; i += 1) {
    createCircles(xCenter, yCenter, 30);
  }
}

function createCircles(x, y, tuSam) {
  const particle = document.createElement('particle');

  selectors.btnWrapper.appendChild(particle);

  const size = Math.floor(Math.random() * 15);

  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;

  const destinationX = x + (Math.random() - 0.5) * tuSam * 15;
  const destinationY = y + (Math.random() - 0.5) * tuSam * 15;

  const rotate = (Math.random() + 1) * tuSam * 10;

  const animation = particle.animate(
    [
      {
        transform: `translate3d(${x - tuSam}px, ${y - tuSam}px, 0)`,
        opacity: 1,
      },
      {
        transform: `translate3d(${destinationX}px, ${destinationY}px, 0)`,
        opacity: 1,
      },
      {
        transform: `translate3d(${destinationX}px, ${destinationY}px, 0) rotateZ(${rotate}deg)`,
        opacity: 0,
      },
    ],
    {
      duration: 10 + Math.random() * 2000,
      easing: 'ease-out',
      delay: Math.random() * 200,
    }
  );

  animation.onfinish = () => particle.remove();
}
