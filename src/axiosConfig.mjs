import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8080',
});

instance.interceptors.request.use(function (config) {
    const token = window.sessionStorage.getItem("tkn");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

instance.interceptors.response.use(function (response) {
    // Any status code that lies within the range of 2xx causes this function to trigger
    // Do something with response data
    if (response.data && response.data.token) {
        window.sessionStorage.setItem("tkn", response.data.token);
    }
    return response;
}, function (error) {
    // Any status codes that fall outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});

export default instance;
