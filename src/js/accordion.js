const selectors = {
  accordion: document.querySelector('.accordion'),
  items: document.querySelectorAll('.accordion button'),
};

selectors.accordion.addEventListener('click', handlerToggleAccordion);

function handlerToggleAccordion(evt) {
  toggleAccordion(evt, true);
}

function toggleAccordion(evt, isMustCloseOthers = true) {
  if (!evt.target.closest('.accordion-button')) return;

  const currentItem = evt.target.closest('.accordion-button');

  const itemToggle = currentItem.getAttribute('aria-expanded');

  if (isMustCloseOthers) {
    selectors.items.forEach(item =>
      item.setAttribute('aria-expanded', 'false')
    );
  }

  currentItem.setAttribute(
    'aria-expanded',
    itemToggle === 'false' ? 'true' : 'false'
  );
}
