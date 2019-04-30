import { SET_ERROR, SET_REDIRECT, SET_PAGE } from '../actionTypes';

const INITIAL_STATE = {
    error: null,
    redirect: null,
    page: null
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
            };
        case SET_PAGE:
            return {
                ...state,
                page: action.page
            }
        default:
            return state;
    }
}