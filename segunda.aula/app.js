const handleInput = () => {
    return document.querySelector('select').value;
};

const handleClickButton = () => {
    const value = handleInput();

    if (value == `azul`) return changeColor(`#0000ff`);
    if (value == `vermelho`) return changeColor(`#ff0000`);
    if (value == `verde`) return changeColor(`#00ff00`);
    if (value == `amarelo`) return changeColor(`#ffff00`);    
    if (value == `roxo`) return changeColor(`#7A1E99`);    

    else return alert(`Digite uma cor valida, azul, vermelho, verde ou amarelo`);
};

const changeColor = (color) => {
    document.documentElement.style.setProperty('--bg-color', color);
};

const handleClick = (e) => {
    e.preventDefault();
    const el = e.target;
    return handleClickButton();
};

document.querySelector(`select`).addEventListener(`change`, handleClick);