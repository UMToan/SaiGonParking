import axiosConfig from '../utils/axiosConfig';

export const getApioguixeQ1 = () =>
    new Promise(async (resolve, reject) => {
        try {
            const oguixe = await axiosConfig({
                method: 'get',
                url: '/api/v1/getoguixe/oguixeQ1',
            });
            resolve(oguixe);
        } catch (error) {
            reject(error);
        }
    });
