import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
});

instance.interceptors.request.use(
    // (interceptors.request)trước khi gửi request lên sever thì đoạn code này sẽ thưucj hiện
    function (config) {
        let token =
            window.localStorage.getItem('persist:auth') &&
            JSON.parse(window.localStorage.getItem('persist:auth'))?.token.slice(1, -1);

        config.headers = {
            authorization: token ? `Bearer ${token}` : null,
        };
        return config;
    },
    function (error) {
        return Promise.reject(error);
    },
);

instance.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        return Promise.reject(error);
    },
);

export default instance; // khi gọi api thì dùng instance để gọi
