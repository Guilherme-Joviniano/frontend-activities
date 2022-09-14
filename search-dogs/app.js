import fetchImagesDog from "./src/components/Gallery/fetchDogsImages.js";
import { createGallery, createImageCards } from "./src/components/Gallery/index.js";
import { showMessage } from './src/utils/showMessage.js'
const inputSearch = document.querySelector(`input`);

const handleSearch = async ({ key, target }) => {
    if (key === 'Enter') {
        const response = await fetchImagesDog(target.value);
        console.log(response);
        if (response.status === 'error') return showMessage('No Founded Hound', 4000) // 4s 
        const { message } = response; 
        const images = createImageCards(message);
        createGallery(images)
    }
}


inputSearch.addEventListener(`keypress`, handleSearch)