import axios from 'axios';


const instance = axios.create({
    baseURL: 'https://burgerproject-56e07.firebaseio.com/',

});

export default instance;