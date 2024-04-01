const openButton = document.querySelector('#open');
const body = document.body;
const successModal = makeModal('Hello, world!');

openButton.addEventListener('click', (evt) => {
    body.appendChild(successModal);
});

function makeModal(content) {
    const overlayElem = document.createElement('div');
    overlayElem.classList.add('overlay');

    overlayElem.addEventListener('click', (evt) => {
        if (!evt.target.classList.contains('content')) {
            closeButton.click();
        }
    });

    const containerElem = document.createElement('div');
    containerElem.classList.add('modal-container');

    const contentElem = document.createElement('div');
    contentElem.classList.add('content');

    contentElem.textContent = content;

    const closeButton = document.createElement('a');
    closeButton.classList.add('close');
    closeButton.textContent = 'x';
    closeButton.href = '#';

    closeButton.addEventListener('click', (evt) => {
        evt.preventDefault();
        body.removeChild(overlayElem);
    });
    
    overlayElem.appendChild(containerElem);
    containerElem.appendChild(closeButton);
    containerElem.appendChild(contentElem);
    
    return overlayElem;
}