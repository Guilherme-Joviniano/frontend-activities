const key = `29336286-8d2b5d5002e00f86736f42194`;

const inputSearch = document.querySelector(`input`);
const imageContainer = document.querySelector(`.container-images`);
const messageDiv = document.querySelector(`.message`);

const showMessage = (message) => {
    messageDiv.textContent = message;
}

const addField = (field) => {
    return `https://pixabay.com/api/?key=${key}&q=${field}&image_type=photo&pretty=true`;
}

const removeLastImages = (container) => {
    messageDiv.textContent = '';
    while (container.lastChild) {
        container.removeChild(container.lastChild);   
    };
}

const fetchImagesDog = async (apiUrl) => {
    const response = await fetch(apiUrl);
    const data = await response.json();
    handleResponse(data);
};

const handleResponse = (response) => {
    const filteredImages = getPics(response.hits);
    if (filteredImages.length == 0) return showMessage(`Nao encontrei resultados`);
    showImages(filteredImages);
}

const getPics = (hits) => {
    let filteredImages = [];
    hits.forEach((hit) => filteredImages.push(hit.webformatURL));
    return filteredImages;
}

const showImages = (images) => {
    if (imageContainer.firstChild) removeLastImages(imageContainer);
    images.forEach((url) => {
        let img = document.createElement('img');
        img.src = url;
        imageContainer.appendChild(img);
    })
} 

const handleSearchChange = ({ target }) => {
    const value = target.value;
    const url = addField(value);
    fetchImagesDog(url);
}


inputSearch.addEventListener(`change`, handleSearchChange)