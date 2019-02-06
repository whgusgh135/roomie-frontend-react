import { GET_ROOMIES } from '../actionTypes';

const INITIAL_STATE = {
    roomies: {}
}

export const roomieReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case GET_ROOMIES:
            return {
                ...state,
                roomies: action.roomies
            };
        default:
            return state;
    }
}