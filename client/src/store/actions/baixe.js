import actionTypes from './actionTypes';
import { getApiAllBaiXe } from '../../services/baixe';
import { getApiAllCURDBaiXe } from '../../services/baixe';

export const getBaixe = (query) => async (dispatch) => {
    try {
        const response = await getApiAllBaiXe(query);
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.GET_BAIXE,
                baixeData: response.data.baixe,
            });
        } else {
            dispatch({
                type: actionTypes.GET_BAIXE,
                msg: response.data.msg,
            });
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_BAIXE,
            msg: error,
            baixeData: null,
        });
    }
};

export const getAllBaixe = (query) => async (dispatch) => {
    try {
        const response = await getApiAllCURDBaiXe(query);
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.GET_BAIXE,
                baixeData: response.data.baixe,
            });
        } else {
            dispatch({
                type: actionTypes.GET_BAIXE,
                msg: response.data.msg,
            });
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_BAIXE,
            msg: error,
            baixeData: null,
        });
    }
};
