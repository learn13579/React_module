const url = 'https://jsonplaceholder.typicode.com/comments'

const getComments = () => fetch(url)
    .then(value => value.json())

const getComment = (id) => fetch(url + '/' + id)
    .then(value => value.json());

export {getComment, getComments};