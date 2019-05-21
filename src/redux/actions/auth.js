import axios from 'axios';
import * as jwt from 'jsonwebtoken';
import * as moment from 'moment';
import * as messageAction from './message';

import { SET_CURRENT_USER } from '../actionTypes';
import { setError, setStatus } from './status';

 export const setAuthorizationToken = token => {
    if(token){
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
        delete axios.defaults.headers.common["Authorization"];
    }
}

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
                    setAuthorizationToken(token)
                    sessionStorage.setItem("jwtToken", token);
                    dispatch(setCurrentUser(user));
                    dispatch(setError(null));
                    if(user.roomie._id) {
                        dispatch(messageAction.selectMessage(user.userId))
                    }
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
        setAuthorizationToken(false);
        sessionStorage.removeItem("jwtToken");
        dispatch(setCurrentUser({}));
    }
}

export const registerUser = userData => {
    return dispatch => {
        return new Promise((resolve, reject) => {
            return axios.post("/api/user/register", {...userData})
                .then(res => res.data)
                .then(({token, ...user}) => {
                    setAuthorizationToken(token);
                    sessionStorage.setItem("jwtToken", token);
                    dispatch(setCurrentUser(user));
                    dispatch(setError(null));
                    dispatch(setStatus("Welcome! You have successfully registered."));
                    setTimeout(function(){
                        dispatch(setStatus(""));
                    }, 5000);
                    resolve();
                })
                .catch(error => {
                    dispatch(setError(error.response.data.error));
                    setTimeout(function(){
                        dispatch(setError(""));
                    }, 5000);
                    reject();
                })
        })
    }
}

export const changePassword = userData => {
    return dispatch => {
        return new Promise((resolve, reject) => {
            return axios.put("/api/user/changePassword", {...userData})
            .then(res => {
                console.log(res);
                resolve();
            })
            .catch(error => {
                console.log(error);
                dispatch(setError(error.response.data.error));
                reject();
            })
        })
    }
}

export const checkAuthState = () => {
    return dispatch => {
        return new Promise((resolve, reject) => {
            const token = sessionStorage.getItem("jwtToken");
            if(token) {
                setAuthorizationToken(token);
                const decodedToken = jwt.decode(token);
                // check if jwt is not expired yet
                const validTime = moment.unix(decodedToken.exp);
                const currentTime = new Date();
                if(validTime > currentTime) {
                    dispatch(setCurrentUser({
                        userId: decodedToken.userId,
                        firstName: decodedToken.firstName,
                        lastName: decodedToken.lastName,
                        roomie: decodedToken.roomie,
                        rent: decodedToken.rent
                    }));
                }
                if(decodedToken.roomie._id) {
                    dispatch(messageAction.selectMessage(decodedToken.userId))
                }
            }
        })
    }
}