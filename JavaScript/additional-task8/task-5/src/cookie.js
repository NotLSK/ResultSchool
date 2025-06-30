export default function acceptCookie() {
    if (checkAcceptCookie()) {
        hideCookie();
        return true;
    }

    const acceptButton = document.querySelector('.cookie-consent__button');
    acceptButton.addEventListener('click', handleClickAccept);
}

function checkAcceptCookie() {
    return JSON.parse(localStorage.getItem('cookieAccepted'));
}

function handleClickAccept() {
    localStorage.setItem('cookieAccepted', 'true');
    hideCookie();
}

function hideCookie() {
    const coockieDiv = document.querySelector('.cookie-consent');
    coockieDiv.style.display = 'none';
}