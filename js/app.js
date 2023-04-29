const accordionButton = document.querySelector('.btn-last-child');

accordionButton.addEventListener('click', () => {
  setTimeout(() => {
    document.documentElement.scrollTop = document.documentElement.scrollHeight;
  }, 300);
  
});

let primerItemBtn = document.querySelector('.first-child .accordion-button');

primerItemBtn.addEventListener('click', () => {
  primerItemBtn.style.setProperty('--bs-accordion-btn-icon-transform', 'rotate(-180deg)');
});