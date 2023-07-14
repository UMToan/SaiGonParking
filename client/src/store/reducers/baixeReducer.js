import actionTypes from '../actions/actionTypes';

const initState = {
    baixeData: [],
    msg: '',
};

const baixeReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.GET_BAIXE:
            return {
                ...state,
                baixeData: action.baixeData || [],
                msg: action.msg || '',
            };

        case actionTypes.GET_BAIXE_FAILED:
            return {
                ...state,
                baixeData: {},
                msg: action.msg || '',
            };

        default:
            return state;
    }
};

export default baixeReducer;
