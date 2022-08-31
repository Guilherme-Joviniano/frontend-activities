"use strict"

const container = document.querySelector('main');

const createNumberContainer = () => { 
    const div = document.createElement('div');
    div.classList.add('numbers-container') 
    return div;
};

const createNumberChild = (content) => {
    const h2 = document.createElement('h2');
    h2.classList.add('numbers-item')
    h2.textContent = content
    return h2;
}

const showArray = (array) => {
    const numberChilds = [];
    const numberContainer = createNumberContainer();
    // populate the child element 
    array.forEach((content) => {
        const numberChild = createNumberChild(content);
        numberChilds.push(numberChild)
    });
    // populate the parent element
    numberChilds.forEach((e) => numberContainer.appendChild(e))
    // populate the main element
    container.appendChild(numberContainer);
}

export default showArray;