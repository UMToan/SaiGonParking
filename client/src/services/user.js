import axiosConfig from '../utils/axiosConfig';

export const getApiAllUser = () =>
    new Promise(async (resolve, reject) => {
        try {
            const user = await axiosConfig({
                method: 'get',
                url: '/api/v1/getAllUser/getAllUser',
            });
            resolve(user);
        } catch (error) {
            reject(error);
        }
    });

export const getApiUser = () =>
    new Promise(async (resolve, reject) => {
        try {
            const user = await axiosConfig({
                method: 'get',
                url: '/api/v1/getUser/getOneUser',
            });
            resolve(user);
        } catch (error) {
            reject(error);
        }
    });
