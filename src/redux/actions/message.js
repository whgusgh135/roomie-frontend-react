import axios from 'axios';
import { setError } from './status';

export const sendMessage = (msg) => {
    return dispatch => {
        return new Promise((resolve, reject) => {
            return axios.post("api/message", msg)
                .then(res => res.data)
                .then(() => {
                    resolve();
                })
                .catch(error => {
                    dispatch(setError(error.response.data.error));
                    reject();
                })
        })
    }
}