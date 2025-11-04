const selectors = {
  accordion: document.querySelector('.accordion'),
  items: document.querySelectorAll('.accordion button'),
};

function toggleAccordion(evt) {
  if (!evt.target.closest('.accordion-button')) return;

  const currentItem = evt.target.closest('.accordion-button');

  const itemToggle = currentItem.getAttribute('aria-expanded');

  selectors.items.forEach(item => item.setAttribute('aria-expanded', 'false'));

  if (itemToggle === 'false') {
    currentItem.setAttribute('aria-expanded', 'true');
  }
}

selectors.accordion.addEventListener('click', toggleAccordion);
