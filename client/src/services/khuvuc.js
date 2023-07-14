import axiosConfig from '../utils/axiosConfig';

export const apiGetKhuVuc = () =>
    new Promise(async (resolve, reject) => {
        try {
            const khuvuc = await axiosConfig({
                method: 'get',
                url: '/api/v1/getKhuvuc/allKhuvuc',
            });
            resolve(khuvuc);
        } catch (error) {
            reject(error);
        }
    });
