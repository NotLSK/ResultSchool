function createUsernameElement(username) {
    const todoElement = document.createElement('li');

    const todoElementAnchor = document.createElement('a');
    todoElementAnchor.href = '#'
    todoElementAnchor.textContent = username;
    todoElement.append(todoElementAnchor);

    return todoElement;
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

function getAllUsers() {
    toggleLoader();
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => {
            if (!response.ok) {
                throw new Error("Ошибка запроса")
            }

            return response.json();
        })
        .then(users => {
            users.forEach(user => {
                const usernameHTML = createUsernameElement(user.name);
                getDataContainer().append(usernameHTML);
            });
        })
        .catch(error => {
            console.error(error);
        })
        .finally(() => {
            toggleLoader();
        })
}

function getUsersByIds(arrayIds) {
    toggleLoader();
    const requests = arrayIds.map(id => fetch(`https://jsonplaceholder.typicode.com/users/${id}`));
    Promise.all(requests)
        .then(responses => {
            const dataResults = responses.map(response => response.json());
            return Promise.all(dataResults);
        })
        .then(users => {
            users.forEach(user => {
                const usernameHTML = createUsernameElement(user.name);
                getDataContainer().append(usernameHTML);
            })
        })
        .catch(error => {
            console.error(error);
        })
        .finally(() => {
            toggleLoader();
        })
}

// getUsersByIds([5, 6, 2, 1]);
// getAllUsers();

// Задание №3

function createPhotoElement(objectPhoto) {
    const photoElement = document.createElement('li')
    photoElement.className = 'photo-item';

    const photoElementImg = document.createElement('img');
    photoElementImg.className = 'photo-item__image';
    photoElementImg.src = `${objectPhoto.url}`;
    photoElement.append(photoElementImg);

    const photoElementH3 = document.createElement('h3');
    photoElementH3.className = 'photo-item__title';
    photoElementH3.textContent = `${objectPhoto.title}`;
    photoElement.append(photoElementH3);

    return photoElement;
}

function getFastestLoadedPhoto(arrayIds) {
    toggleLoader();
    const requests = arrayIds.map(id => fetch(`https://api.slingacademy.com/v1/sample-data/photos/${id}`));
    Promise.race(requests)
        .then(response => {

            if (!response.ok) {
                throw new Error("Ошибка запроса");
            }

            return response.json();
        })
        .then(result => {
            console.log(result)
            const photoHTML = createPhotoElement(result.photo);
            getDataContainer().append(photoHTML);
        })
        .catch(error => {
            console.error(error);
        })
        .finally(() => {
            toggleLoader();
        })
}

getFastestLoadedPhoto([60, 12, 55]);
