function renderAlbums() {
    toggleLoader();
    const albums = getAlbums();
    albums
        .then(albums => {
            const dataContainer = getDataContainer();
            albums.forEach(album => {
                const albumElemnt = createAlbumElement(album.title);
                dataContainer.append(albumElemnt);
            });
        })
        .catch(error => {
            console.error(error);
        })
        .finally(() => {
            toggleLoader();
        })

}

async function getAlbums() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/albums');
        if (!response.ok) {
            throw new Error('Ошибка в получении данных об альбомах')
        }
        const albums = await response.json();

        return albums;
    } catch (error) {
        console.error(error);
    }
}

function createAlbumElement(albumName) {
    const albumElemnt = document.createElement('li');
    albumElemnt.className = 'album-item';
    albumElemnt.textContent = albumName;

    return albumElemnt;
}

function toggleLoader() {
    const loaderHTML = document.querySelector('#loader');
    const isHidden = loaderHTML.hasAttribute('hidden');

    if (isHidden) {
        loaderHTML.removeAttribute('hidden');
    } else {
        loaderHTML.setAttribute('hidden', '');
    }
}

function getDataContainer() {
    return document.querySelector('#data-container');
}

renderAlbums();