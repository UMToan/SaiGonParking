import axiosConfig from '../utils/axiosConfig';

export const apiRegister = (payload) =>
    new Promise(async (resolve, reject) => {
        //payload ở đây là 1 object chứa (mail, sdt, pass), async và await dùng để xử lý đồng bộ
        try {
            const response = await axiosConfig({
                method: 'post', // đây là phương thức quy định giống ở api bên server
                url: '/api/v1/auth/register', // url của api
                data: payload, //
            });

            resolve(response);
        } catch (error) {
            reject(error);
        }
    });

export const apiLogin = (payload) =>
    new Promise(async (resolve, reject) => {
        //payload ở đây là 1 object chứa (mail, sdt, pass), async và await dùng để xử lý đồng bộ
        try {
            const response = await axiosConfig({
                method: 'post', // đây là phương thức quy định giống ở api bên server
                url: '/api/v1/auth/login', // url của api
                data: payload, //
            });

            resolve(response);
        } catch (error) {
            reject(error);
        }
    });
