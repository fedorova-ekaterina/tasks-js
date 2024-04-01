const leftButton = document.querySelector('#left');
const rightButton = document.querySelector('#right');
const elemsList = document.querySelector('#elems');
const elems = document.querySelectorAll('.elem');
const computedStyles = getComputedStyle(elemsList);

const elemWidth = getComputedStyle(elems[0]).width;
const step = parseInt(elemWidth);
const visibleElems = 300 / step;
const min = 0;
const max = (elems.length - visibleElems) * step;
let current = 0;

elemsList.style.right = current;

rightButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    if (current < max) {
        current += step;
        elemsList.style.right = `${current}px`;
    }
});

leftButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    if (current > min) {
        current -= step;
        elemsList.style.right = `${current}px`;
    }
});