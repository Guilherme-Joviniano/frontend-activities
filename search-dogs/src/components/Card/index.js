const createImageCards = (images = []) => {
    let cards = []
    images.forEach((image) => {
        const div = document.createElement('div');
        div.classList.add('wrapper-img')
        const imageDiv = document.createElement('img')
        imageDiv.classList.add('image');
        imageDiv.src = image;
        div.append(imageDiv)
        cards.push(div);
    })
    return cards
}

export default createImageCards