import axiosConfig from '../utils/axiosConfig';
import axios from 'axios';

//create-baixe
export const apiCreateNewBaiXe = (payload) =>
    new Promise(async (resolve, reject) => {
        try {
            const baixe = await axiosConfig({
                method: 'post',
                url: '/api/v1/getBaixe/create-new',
                data: payload,
            });
            resolve(baixe);
        } catch (error) {
            reject(error);
        }
    });

//get image
export const apiUploadImages = (images) =>
    new Promise(async (resolve, reject) => {
        try {
            const baixe = await axios({
                method: 'post',
                url: `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload`,
                data: images,
            });
            resolve(baixe);
        } catch (error) {
            reject(error);
        }
    });

export const getApiAllCURDBaiXe = (query) =>
    new Promise(async (resolve, reject) => {
        try {
            const baixe = await axiosConfig({
                method: 'get',
                url: '/api/v1/getBaixe/aLLCURDBaixe',
                params: query,
            });
            resolve(baixe);
        } catch (error) {
            reject(error);
        }
    });

export const getApiAllBaiXe = (query) =>
    new Promise(async (resolve, reject) => {
        try {
            const baixe = await axiosConfig({
                method: 'get',
                url: '/api/v1/getBaixe/allBaixe',
                params: query,
            });
            resolve(baixe);
        } catch (error) {
            reject(error);
        }
    });

export const getApibaixeSearch = (name) =>
    new Promise(async (resolve, reject) => {
        try {
            const baixe = await axiosConfig({
                method: 'get',
                url: `/api/v1/getBaixe/allBaixeSearch?name=${name}`,
            });
            resolve(baixe);
        } catch (error) {
            reject(error);
        }
    });

export const getApibaixeQ1 = () =>
    new Promise(async (resolve, reject) => {
        try {
            const baixe = await axiosConfig({
                method: 'get',
                url: '/api/v1/getBaixe/allBaixeQ1',
            });
            resolve(baixe);
        } catch (error) {
            reject(error);
        }
    });

export const getApibaixeQ2 = () =>
    new Promise(async (resolve, reject) => {
        try {
            const baixe = await axiosConfig({
                method: 'get',
                url: '/api/v1/getBaixe/allBaixeQ2',
            });
            resolve(baixe);
        } catch (error) {
            reject(error);
        }
    });

export const getApibaixeQ3 = () =>
    new Promise(async (resolve, reject) => {
        try {
            const baixe = await axiosConfig({
                method: 'get',
                url: '/api/v1/getBaixe/allBaixeQ3',
            });
            resolve(baixe);
        } catch (error) {
            reject(error);
        }
    });

export const getApibaixeQ5 = () =>
    new Promise(async (resolve, reject) => {
        try {
            const baixe = await axiosConfig({
                method: 'get',
                url: '/api/v1/getBaixe/allBaixeQ5',
            });
            resolve(baixe);
        } catch (error) {
            reject(error);
        }
    });

export const getApibaixeQ6 = () =>
    new Promise(async (resolve, reject) => {
        try {
            const baixe = await axiosConfig({
                method: 'get',
                url: '/api/v1/getBaixe/allBaixeQ6',
            });
            resolve(baixe);
        } catch (error) {
            reject(error);
        }
    });

export const getApibaixeQ7 = () =>
    new Promise(async (resolve, reject) => {
        try {
            const baixe = await axiosConfig({
                method: 'get',
                url: '/api/v1/getBaixe/allBaixeQ7',
            });
            resolve(baixe);
        } catch (error) {
            reject(error);
        }
    });

export const getApibaixeQ10 = () =>
    new Promise(async (resolve, reject) => {
        try {
            const baixe = await axiosConfig({
                method: 'get',
                url: '/api/v1/getBaixe/allBaixeQ10',
            });
            resolve(baixe);
        } catch (error) {
            reject(error);
        }
    });

export const getApibaixeQ11 = () =>
    new Promise(async (resolve, reject) => {
        try {
            const baixe = await axiosConfig({
                method: 'get',
                url: '/api/v1/getBaixe/allBaixeQ11',
            });
            resolve(baixe);
        } catch (error) {
            reject(error);
        }
    });

export const getApibaixeQBt = () =>
    new Promise(async (resolve, reject) => {
        try {
            const baixe = await axiosConfig({
                method: 'get',
                url: '/api/v1/getBaixe/allBaixeQBt',
            });
            resolve(baixe);
        } catch (error) {
            reject(error);
        }
    });

export const getApibaixeQGv = () =>
    new Promise(async (resolve, reject) => {
        try {
            const baixe = await axiosConfig({
                method: 'get',
                url: '/api/v1/getBaixe/allBaixeQGv',
            });
            resolve(baixe);
        } catch (error) {
            reject(error);
        }
    });

export const getApibaixeQPn = () =>
    new Promise(async (resolve, reject) => {
        try {
            const baixe = await axiosConfig({
                method: 'get',
                url: '/api/v1/getBaixe/allBaixeQPn',
            });
            resolve(baixe);
        } catch (error) {
            reject(error);
        }
    });
