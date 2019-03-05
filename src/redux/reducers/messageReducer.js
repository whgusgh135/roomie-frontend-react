import { GET_MESSAGES } from '../actionTypes';

const INITIAL_STATE = {
    message: []
}

export const messageReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case GET_MESSAGES:
            return {
                ...state,
                messages: action.message
            };
        default:
            return state;
    }
}