import './index.css';
import initState from './src/state';
import acceptCookie from './src/cookie';

document.addEventListener('DOMContentLoaded', function () {
    initState();
    acceptCookie();
})
