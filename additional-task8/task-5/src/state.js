export default function initState() {
    if (localStorage.length === 0) {
        localStorage.setItem('cookieAccepted', 'false');
    }
}