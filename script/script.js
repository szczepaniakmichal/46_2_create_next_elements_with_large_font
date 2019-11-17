const createElements = () => {

};

const init = () => {
    const btn = document.createElement('button');
    btn.textContent = 'Stwórz 4 elementów';

    const listOfElements = document.createElement('ul');

    document.body.appendChild(btn);
    document.body.appendChild(listOfElements);

    btn.addEventListener('click', createElements);
};

init();

