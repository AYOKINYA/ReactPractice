import axios from 'axios';

const BASE_URL = "https://jsonplaceholder.typicode.com/posts";


const getPosts = () => {
        return axios.get(BASE_URL);
    };


const api = {
    getPosts
};

export default api;