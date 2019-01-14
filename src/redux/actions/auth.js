import axios from 'axios';
import { SET_CURRENT_USER } from '../actionTypes';

export const setCurrentUser = user => {
    return {
        type: SET_CURRENT_USER,
        user: user
    };
}

export const authUser = userData => {
    return dispatch => {
        return new Promise((resolve, reject) => {
            return axios.post("/api/user/auth", {...userData})
                .then(res => res.data)
                .then(({token, ...user}) => {
                    sessionStorage.setItem("jwtToken", token);
                    dispatch(setCurrentUser(user));
                    resolve();
                })
                .catch(error => {
                    reject(error.response.data.error);
                })
        })
    }
}