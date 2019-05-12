import axios from 'axios';

const instance = axios.create({
    baseURL : 'https://react-my-burger-necmi.firebaseio.com/'
});

export default instance;