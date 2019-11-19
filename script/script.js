let count = 0;
let fontSize = 10;

const createElements = () => {
    const ul = document.querySelector('ul');
    for (let i = 0; i < 5; i++) {
        count++;
        const li = document.createElement('li');
        li.textContent = `Element nr ${count}`;
        li.style.fontSize = `${fontSize}px`;
        ul.appendChild(li);
        fontSize++
    }
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

