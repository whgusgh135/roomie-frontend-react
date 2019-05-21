import { GET_ROOMIES, GET_ROOMIE } from '../actionTypes';

const INITIAL_STATE = {
    roomies: {},
    selectedRoomie: {}
}

export const roomieReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case GET_ROOMIES:
            return {
                ...state,
                roomies: action.roomies
            };
        case GET_ROOMIE: 
            return {
                ...state,
                selectedRoomie: action.selectedRoomie
            }
        default:
            return state;
    }
}