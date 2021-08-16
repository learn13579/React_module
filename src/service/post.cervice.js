const url = 'https://jsonplaceholder.typicode.com/posts'

const getPosts = () => fetch(url)
    .then(value => value.json());

const getPost = (postId) => fetch(url + '/' + postId)
    .then(value => value.json());

export {getPost, getPosts};
