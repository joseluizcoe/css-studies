const body = document.querySelector('body');
const horizontal = document.querySelector('.js-horizontal-scroll');
const vertical = document.querySelector('.js-vertical-scroll');

const removeClassAttribute = (element) => {
  element.removeAttribute('class');
}

horizontal.addEventListener('click', (event) => {
  event.preventDefault();
  removeClassAttribute(body);
  body.setAttribute('class', 'horizontal-scroll');
});

vertical.addEventListener('click', (event) => {
  event.preventDefault();
  removeClassAttribute(body);
  body.setAttribute('class', 'vertical-scroll');
});
