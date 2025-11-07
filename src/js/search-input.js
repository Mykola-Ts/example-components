const selectors = {
  searchIcon: document.querySelector('.search-icon'),
  searchIconInput: document.querySelector('.search-icon-input'),
  searchIconWrapper: document.querySelector('.search-icon-wrapper'),
};

selectors.searchIconWrapper.addEventListener('click', handlerToggleSearchIcon);
selectors.searchIconInput.addEventListener('input', handlerSearchInput);

function handlerToggleSearchIcon() {
  if (selectors.searchIcon.classList.contains('open')) {
    selectors.searchIconInput.value = '';
  }

  selectors.searchIcon.classList.toggle('open');
}

function handlerSearchInput(evt) {
  console.log(evt.target.value);
}
