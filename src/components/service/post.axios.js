import axios from 'axios';

let config =({
    baseURL: 'https://jsonplaceholder.typicode.com/posts/',
});

let axiosInstance=axios.create(config);

const getPosts = () => {
    return axiosInstance.get('');
}

const getPost = (id) => {
    return axiosInstance.get(`/${id}`);
}

const getCommentOfUser = (postId) => axiosInstance.get(`/${postId}/comments`);
// https://jsonplaceholder.typicode.com/posts/1/comments

export {getPost, getPosts, getCommentOfUser};
