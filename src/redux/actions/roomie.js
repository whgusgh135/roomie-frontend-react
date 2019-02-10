import axios from 'axios';
import { GET_ROOMIES } from '../actionTypes';
import { setError } from './error';
import { setAuthorizationToken, setCurrentUser } from './auth';

const getRoomies = roomies => {
    return {
        type: GET_ROOMIES,
        roomies: roomies
    };
}

export const selectRoomies = (num) => {
    return dispatch => {
        return new Promise((resolve, reject) => {
            return axios.get("/api/roomie/", {params: {num: num}})
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

export const searchRoomies = (region) => {
    return dispatch => {
        return new Promise((resolve, reject) => {
            return axios.get(`/api/roomie/?region=${region}`)
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

export const createRoomie = userData => {
    return dispatch => {
        return new Promise((resolve, reject) => {
            const config = {     
                headers: { 'content-type': 'multipart/form-data' }
            }
            return axios.post("/api/roomie", userData, config)
                .then(res => res.data)
                .then(({token, ...user}) => {
                    setAuthorizationToken(token);
                    sessionStorage.setItem("jwtToken", token);
                    dispatch(setCurrentUser(user));
                    resolve();
                })
                .catch(error => {
                    dispatch(setError(error.response.data.error));
                    reject();
                })
        })
    }
}