const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';
const COMMENTS_URL = `https://jsonplaceholder.typicode.com/comments?postId=`;

async function renderPost(postId) {
    const postContainer = document.querySelector('.post');

    try {
        const post = await getPostsById(postId);

        if (!post) {
            throw new Error('Ошибка при получении данных о посте');
        }

        postContainer.append(
            createPostHeader(post),
            createPostText(post),
            createCommentsTitle()
        )

        const comments = await getCommnetsByPostId(postId);

        if (!comments) {
            throw new Error('Ошибка при получении комментариев к посту');
        }

        const commentsContainer = createCommentsContainer();

        comments.forEach(comment => {
            commentsContainer.append(createComment(comment));
        });

        postContainer.append(commentsContainer);
    }
    catch (error) {
        console.error(error);
    }
}

async function getPostsById(postId) {
    try {
        const response = await fetch(`${POSTS_URL}/${postId}`);
        if (!response.ok) {
            throw new Error('Ошибка при получении поста');
        }

        const post = await response.json();

        return post;
    }
    catch (error) {
        console.error(error);
    }
}

async function getCommnetsByPostId(postId) {
    try {
        const response = await fetch(`${COMMENTS_URL}${postId}`);
        if (!response.ok) {
            throw new Error('Ошибка при получении комментариев к посту');
        }

        const comments = await response.json();

        return comments;
    }
    catch (error) {
        console.error(error);
    }
}

function createPostHeader(post) {
    const postHeader = document.createElement('h1');
    postHeader.className = 'post__title';
    postHeader.textContent = post.title;
    return postHeader;
}

function createPostText(post) {
    const postText = document.createElement('p');
    postText.className = 'post__text';
    postText.textContent = post.body;
    return postText;
}

function createCommentsTitle() {
    const commentsText = document.createElement('b');
    commentsText.className = 'post__comments-text';
    commentsText.textContent = 'Комментарии';
    return commentsText;
}

function createCommentsContainer() {
    const postComments = document.createElement('div');
    postComments.className = 'post__comments';
    return postComments;
}

function createComment(comment) {
    const postComment = document.createElement('div');
    postComment.className = 'post-comment';

    const postCommentAuthor = document.createElement('span');
    postCommentAuthor.className = 'post-comment__author';
    postCommentAuthor.textContent = comment.email;

    const postCommentText = document.createElement('span');
    postCommentText.className = 'post-comment__text';
    postCommentText.textContent = comment.body;

    postComment.append(postCommentAuthor, postCommentText);

    return postComment;
}

renderPost(37);