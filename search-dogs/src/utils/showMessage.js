const messageDisplay = document.querySelector('#wrap-message')
const messageText = document.querySelector('#message')
const showMessage = (text, timeout) => {
    if (messageDisplay.style.display === 'none') messageDisplay.style.display = 'flex'
    messageText.textContent = text
    setTimeout(() => {
        messageDisplay.style.display = 'none'
    }, timeout);
}


export {
    showMessage
};