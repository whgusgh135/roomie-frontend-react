import { SET_CURRENT_USER, SET_ROOMIE } from '../actionTypes';

const INITIAL_STATE = {
    isAuthenticated: false,
    user: {}
}

export const authReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case SET_CURRENT_USER:
            return {
                isAuthenticated: !!Object.keys(action.user).length,
                user: action.user
            };
        case SET_ROOMIE:
            return {
                ...state,
                user: action.user
            }
        default:
            return state;
    }
}