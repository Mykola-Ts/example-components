const countdownTimer = document.querySelector('.js-video-countdown-timer');

document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    countdownTimer.pause();
  } else {
    countdownTimer.play();
  }
});
