const gallery = document.querySelector('.gallery');


const imageCardTemplate = `<div class="card">
<img src="" alt="" class="image-dog">
</div>`


const sanitizeGallery = () => {
    while(gallery.lastChild) {
        gallery.removeChild(gallery.lastChild);
    }    
};

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

const createGallery = (cards = []) => { 
    if (gallery.childNodes) sanitizeGallery();
    cards.forEach((card) => gallery.append(card))
}


export { createGallery, createImageCards}

