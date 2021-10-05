import axios from 'axios';

const BASE_URL = "https://jsonplaceholder.typicode.com/posts";


const getPosts = () => {
    return axios.get(BASE_URL + '?_limit=10');
};

const addPost = (newPost) => {
    return axios.post(BASE_URL, newPost);
};

const editPost = (id, editedPost) => {
    return axios.put(BASE_URL + '/' + id, editedPost);
}

const deletePost = (id) => {
    return axios.delete(BASE_URL + '/' + id);
}


const api = {
    getPosts,
    addPost,
    editPost,
    deletePost
};

export default api;