const gallery = document.querySelector('.gallery');

const sanitizeGallery = () => {
    while(gallery.lastChild) {
        gallery.removeChild(gallery.lastChild);
    }    
};

const createGallery = (cards = []) => { 
    if (gallery.childNodes) sanitizeGallery();
    cards.forEach((card) => gallery.append(card))
}

export default createGallery

