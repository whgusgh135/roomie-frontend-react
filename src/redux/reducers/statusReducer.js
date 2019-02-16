import { SET_ERROR, SET_REDIRECT } from '../actionTypes';

const INITIAL_STATE = {
    error: null,
    redirect: null
}

export const statusReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case SET_ERROR:
            return {
                ...state,
                error: action.error
            };
        case SET_REDIRECT:
            return {
                ...state,
                redirect: action.redirect
            }
        default:
            return state;
    }
}