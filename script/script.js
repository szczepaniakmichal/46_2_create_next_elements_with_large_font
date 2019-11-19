let count = 0;
let fontSize = 10;
let fontColor = '';
const listOfElements = document.createElement('ul');

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const createElements = () => {
    const ul = document.querySelector('ul');
    for (let i = 0; i < 5; i++) {
        count++;
        const li = document.createElement('li');
        li.textContent = `Element nr ${count}`;
        li.style.fontSize = `${fontSize}px`;
        fontColor = getRandomColor();
        li.style.color = fontColor;
        ul.appendChild(li);
        fontSize++
    }
};

const clearList = () => {
    count = 0;
    fontSize = 10;
    // while (listOfElements.firstChild) {
    //     listOfElements.firstChild.remove();
    // }
// next way to remove element
    [...listOfElements.childNodes].forEach(el => el.remove());
};

const init = () => {
    const btn = document.createElement('button');
        btn.textContent = 'Stwórz 5 elementów';
        btn.addEventListener('click', createElements);
    const btnClear = document.createElement('button');
        btnClear.textContent = 'wyczyść listę';
        btnClear.addEventListener('click', clearList);
    document.body.appendChild(btn);
    document.body.appendChild(btnClear);
    document.body.appendChild(listOfElements);
};

init();

