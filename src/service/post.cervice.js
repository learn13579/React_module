const url = 'https://jsonplaceholder.typicode.com/'

const getPosts = () => fetch(url)
    .then(value => value.json())


const getPost = (id) => fetch(url + 'users/' + id + '/posts')
    .then(value => value.json());

export {getPost, getPosts};