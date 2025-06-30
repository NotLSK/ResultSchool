// Задание №1
const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";
let isLoading = false;

const createNewPost = async () => {
    isLoading = true;
    try {
        const response = await fetch(POSTS_URL, { method: "POST" });
        const result = await response.json();
        console.log('result', result);
    } catch (e) {
        console.error(e);
    } finally {
        isLoading = false;
    }
}

// createNewPost();

//Задание №2
const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';

const getTodosByIds = async (ids) => {
    try {
        const requests = ids.map((id) => fetch(`${TODOS_URL}/${id}`));
        const responses = await Promise.all(requests);
        const dataResults = responses.map((data) => data.json());
        const allTasks = await Promise.all(dataResults);
        console.log(allTasks);
    } catch (e) {
        console.error(e);
    }
}


// getTodosByIds([43, 21, 55, 100, 10]);