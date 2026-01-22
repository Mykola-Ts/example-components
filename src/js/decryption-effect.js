const dictionary = '0123456789qwertyuiopasdfghjklzxcvbnm!?></\a`~+*=@#$%'.split(
  ''
);
const decryptionTitle = document.querySelector('.decryption-title');
const againButton = document.querySelector('.again-button');

againButton.addEventListener('click', () => init('Decrypted 👍'));

function ran() {
  return Math.floor(Math.random() * dictionary.length);
}

function ranString(amt) {
  let string = '';

  for (let i = 0; i < amt; i += 1) {
    string += dictionary[ran()];
  }

  return string;
}

function init(str) {
  let count = str.length;
  let delay = 50;

  againButton.classList.remove('show');
  decryptionTitle.innerHTML = '';

  const gen = setInterval(function () {
    decryptionTitle.setAttribute('data-before', ranString(count));
    decryptionTitle.setAttribute('data-after', ranString(count));

    if (delay > 0) {
      delay -= 1;
    } else {
      if (count < str.length) {
        decryptionTitle.innerHTML += str[str.length - count - 1];
      }

      count -= 1;

      if (count === -1) {
        clearInterval(gen);
        showButton();
      }
    }
  }, 32);
}

function showButton() {
  againButton.classList.add('show');
}

init('Decrypted 👍');
