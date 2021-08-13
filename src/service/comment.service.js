const url = 'https://jsonplaceholder.typicode.com/'

const getComments = () => fetch(url)
    .then(value => value.json())

// https://jsonplaceholder.typicode.com/comments?postId=1
const getComment = (id) => fetch(url + 'comments?postId/' + id)
    .then(value => value.json());

export {getComment, getComments};
