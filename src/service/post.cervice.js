const url = 'https://jsonplaceholder.typicode.com/posts'

const getPosts = () => fetch(url)
    .then(value => value.json());

const getPost = (id) => fetch(url + '/' + id)
    .then(value => value.json());

export {getPost, getPosts};