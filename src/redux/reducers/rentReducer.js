import { GET_RENTS } from '../actionTypes';

const INITIAL_STATE = {
    rents: {}
}

export const rentReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case GET_RENTS:
            return {
                ...state,
                rents: action.rent
            };
        default:
            return state;
    }
}