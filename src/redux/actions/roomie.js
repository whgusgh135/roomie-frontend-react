import axios from 'axios';
import { GET_ROOMIES } from '../actionTypes';
import { setError } from './error';

const getRoomies = roomies => {
    return {
        type: GET_ROOMIES,
        roomies: roomies
    };
}

export const selectRoomies = () => {
    return dispatch => {
        return new Promise((resolve, reject) => {
            return axios.get("/api/roomie/")
                .then(res => res.data)
                .then(roomies => {
                    dispatch(getRoomies(roomies));
                    resolve();
                })
                .catch(error => {
                    dispatch(setError(error));
                    reject();
                })
        })
    }
}