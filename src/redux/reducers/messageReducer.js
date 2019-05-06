import { GET_MESSAGES } from '../actionTypes';

const INITIAL_STATE = {
    messages: []
}

export const messageReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case GET_MESSAGES:
            return {
                ...state,
                messages: action.messages
            };
        default:
            return state;
    }
}