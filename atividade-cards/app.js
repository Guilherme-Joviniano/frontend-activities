const cards = {
    "Caracthers":[
      "Iron - Wounded, captured and forced to build a weapon by …make the world a safer, better place as Iron Man.",
      "Thanos - The Mad Titan Thanos, a melancholy, brooding indiv…he became more powerful than any of his brethren.",
      "SpiderMan - Peter’s relatively normal life changed abruptly du…it escaped and bit Peter before it was destroyed.",
      "Thor - As the Norse God of thunder and lightning, Thor wi…never, ever stop fighting for a worthwhile cause.",
      "CaptainAmerica - Vowing to serve his country any way he could, youn… living, breathing symbol of freedom and liberty"
      ]
}

const data = cards.Caracthers;

const container = document.querySelector('.container-cards');

const getTitle = (rawText) => rawText.split('-')[0];
const getBody = (rawText) => rawText.split('-')[1];

const createCard = () => {  
    const card = document.createElement('div') 
    const h1 = document.createElement('h1') 
    const p = document.createElement('p') 
    card.classList.add('card');
    card.appendChild(h1)
    card.appendChild(p)
    return card;
};

const populateCard = (cards) => {
    cards.forEach((e) => {
        const card = createCard();
        const title = getTitle(e)
        const body = getBody(e)
        card.querySelector('h1').textContent = title;
        card.querySelector('p').textContent = body;
        container.appendChild(card);
    })
}

populateCard(data);