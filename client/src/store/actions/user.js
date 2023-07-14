import actionTypes from './actionTypes';
import { getApiUser } from '../../services/user';

export const getUser = () => async (dispatch) => {
    try {
        const response = await getApiUser();
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.GET_USER,
                userData: response.data.user,
            });
        } else {
            dispatch({
                type: actionTypes.GET_USER,
                msg: response.data.msg,
                userData: null,
            });
            dispatch({
                type: actionTypes.LOGOUT,
            });
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_USER,
            msg: error,
            userData: null,
        });
        dispatch({
            type: actionTypes.LOGOUT,
        });
    }
};
