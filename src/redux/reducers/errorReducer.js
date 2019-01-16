import { SET_ERROR } from '../actionTypes';

const INITIAL_STATE = {
    error: null
}

export const errorReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case SET_ERROR:
            return {
                error: action.error
            };
        default:
            return state;
    }
}