import axios from 'axios';

const BASE_URL = "https://jsonplaceholder.typicode.com/posts";


const getPosts = () => {
    return axios.get(BASE_URL + '?_limit=10');
};

const addPost = (newPost) => {
    return axios.post(BASE_URL, newPost);
};


const api = {
    getPosts,
    addPost
};

export default api;