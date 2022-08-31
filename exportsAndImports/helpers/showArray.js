"use strict"

const createNumberContainer = () => {
    const div = document.createElement('div');
    div.classList.add('numbers-container')
    div.appendChild(document.createElement('h2'));
    return div;
};
const createNumberChild = (content) => {
    const h2 = document.createElement('h2');
    h2.classList.add('numbers-item')
    h2.textContent = content
    return h2;
}

const applyDiscount = (numbers = [], percentage) => numbers.map((e) => e - ((e / 100) * percentage));

const showArray = (numbers = [], containerName) => {
    const container = document.querySelector(containerName);

    const numberContainer = createNumberContainer();

    // setting the text of the container title
    numberContainer.querySelector('h2').textContent = `numbers com ${numbers.length} elementos`
    
    // apply the discount 
    const numbersWithDiscount = applyDiscount(numbers, 10);

    // populate the child element 
    const numberChilds = numbersWithDiscount.map((content) => createNumberChild(content));
    
    // populate the parent element
    numberChilds.forEach((child) => numberContainer.appendChild(child))
    
    // populate the main element
    container.appendChild(numberContainer);
}

export default showArray;