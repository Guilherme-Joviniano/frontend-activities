const URL_PATH = 'https://dog.ceo/api/breed/hound/images'

const addField = (field = '') => URL_PATH.replace('hound', field);

const fetchImagesDog = async (breed) => { 
    try {
        const url = addField(breed);
        console.log(url);
        const response = await fetch(url);
        const json = await response.json();
        return json;
    } catch (e) {
        console.log(e);
    }
};

export default fetchImagesDog;
