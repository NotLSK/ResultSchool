import { getRandomColor } from "./utils";

export default function initApp() {
    const changeColorButton = document.createElement('button');
    changeColorButton.className = 'button';
    changeColorButton.textContent = 'Изменить цвет страницы';

    changeColorButton.addEventListener('click', handleChangeColorClick);
    document.body.append(changeColorButton);
}

function handleChangeColorClick() {
    document.body.style.backgroundColor = getRandomColor();
}

