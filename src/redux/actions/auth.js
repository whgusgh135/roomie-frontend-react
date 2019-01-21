import axios from 'axios';
import * as jwt from 'jsonwebtoken';
import * as moment from 'moment';

import { SET_CURRENT_USER } from '../actionTypes';
import { setError } from './error';

const setCurrentUser = user => {
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
                    dispatch(setError(null));
                    resolve();
                })
                .catch(error => {
                    dispatch(setError(error.response.data.error));
                    reject();
                })
        })
    }
}

export const logout = () => {
    return dispatch => {
        sessionStorage.removeItem("jwtToken");
        dispatch(setCurrentUser({}));
    }
}

export const checkAuthState = () => {
    return dispatch => {
        return new Promise((resolve, reject) => {
            const token = sessionStorage.getItem("jwtToken");
            if(token) {
                const decodedToken = jwt.decode(token);
                // check if jwt is not expired yet
                const validTime = moment.unix(decodedToken.exp);
                const currentTime = new Date();
                if(validTime > currentTime) {
                    dispatch(setCurrentUser({
                        userId: decodedToken.userId,
                        firstName: decodedToken.firstName,
                        lastName: decodedToken.lastName,
                        roomie: decodedToken.roomie
                    }));
                }
            }
        })
    }
}