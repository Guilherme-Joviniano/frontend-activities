const messageDisplay = document.querySelector('#wrap-message')
const messageText = document.querySelector('#message')
const showMessage = (text) => {
    if (messageDisplay.style.display === 'none') messageDisplay.style.display = 'flex'
    messageText.textContent = text
    setTimeout(() => {
        messageDisplay.style.display = 'none'
    }, 2000);
}


export {
    showMessage
};