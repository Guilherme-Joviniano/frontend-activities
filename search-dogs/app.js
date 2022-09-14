import fetchImagesDog from "./src/utils/fetchDogsImages.js";
import createGallery from "./src/components/Gallery/index.js";
import createImageCards from "./src/components/Card/index.js";
import {
    showMessage
} from './src/utils/showMessage.js'
const inputSearch = document.querySelector(`input`);

const handleSearch = async ({
    key,
    target
}) => {
    if (key === 'Enter') {
        const response = await fetchImagesDog(target.value.toLowerCase());
        console.log(response);
        if (response.status === 'error') return showMessage('No Founded Hound', 8000) // 8s 
        const {
            message
        } = response;
        const images = createImageCards(message);
        createGallery(images)
    }
}


inputSearch.addEventListener(`keypress`, handleSearch)