import axios from 'axios';
import { setError, setStatus } from './status';
import { GET_MESSAGES } from '../actionTypes';

export const getMessages = messages => {
    return {
        type: GET_MESSAGES,
        messages
    };
}

export const selectMessage = (id) => {
    return dispatch => {
        return new Promise((resolve, reject) => {
            return axios.get(`api/message/${id}`)
                .then(res => res.data)
                .then(messages => {
                    dispatch(getMessages(messages));
                    resolve();
                })
                .catch(error => {
                    dispatch(setError(error.response.data.error));
                    reject();
                })
        })
    }
}

export const sendMessage = (msg) => {
    return dispatch => {
        return new Promise((resolve, reject) => {
            return axios.post("api/message", msg)
                .then(res => res.data)
                .then(() => {
                    dispatch(setStatus("Message succesfully sent!"));
                    setTimeout(function(){
                        dispatch(setStatus(""));
                    }, 5000);
                    resolve();
                })
                .catch(error => {
                    dispatch(setError(error.response.data.error));
                    reject();
                })
        })
    }
}

export const deleteMessage = (userId, msgId) => {
    return dispatch => {
        return new Promise((resolve, reject) => {
            return axios.delete(`/api/message/${userId}/${msgId}`)
                .then(res => res.data)
                .then(messages => {
                    dispatch(getMessages(messages));
                    dispatch(setStatus("Message deleted!"));
                    setTimeout(function(){
                        dispatch(setStatus(""));
                    }, 5000);
                    resolve();
                })
                .catch(error => {
                    dispatch(setError(error));
                    reject();
                })
        })
    }
}