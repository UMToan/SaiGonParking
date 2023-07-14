import axiosConfig from '../utils/axiosConfig';

export const getApiBangGiaQ1 = () =>
    new Promise(async (resolve, reject) => {
        try {
            const banggia = await axiosConfig({
                method: 'get',
                url: '/api/v1/getBangGia/getBangGiaQ1',
            });
            resolve(banggia);
        } catch (error) {
            reject(error);
        }
    });
