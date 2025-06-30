import jsLogo from './assets/js_logo.svg.png';
import './index.css';

const header = document.createElement('h1');
header.textContent = 'I love JavaScript';

const jsLogoImg = document.createElement('img');
jsLogoImg.src = jsLogo;

document.body.append(header, jsLogoImg);