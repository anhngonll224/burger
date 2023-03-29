import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-21c46-default-rtdb.firebaseio.com/'
});

export default instance;