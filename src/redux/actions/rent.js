import axios from 'axios';
import { GET_RENT } from '../actionTypes';
import { setError } from './error';

const getRents = (rent) => {
    return {
        type: GET_RENT,
        rent: rent
    }
}

export const selectRent = (num) => {
    return dispatch => {
        return new Promise((resolve, reject) => {
            return axios.get("/api/rent", {params: {num}})
                .then(res => res.data)
                .then(rent => {
                    dispatch(getRents(rent));
                    resolve();
                })
                .catch(error => {
                    dispatch(setError(error));
                    reject();
                })
        }) 
    }
}

export const createRent = userData => {
    return dispatch => {
        return new Promise((resolve, reject) => {
            const config = {     
                headers: { 'content-type': 'multipart/form-data' }
            }
            return axios.post("/api/rent", userData, config)
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

export const searchRents = (region) => {
    return dispatch => {
        return new Promise((resolve, reject) => {
            return axios.get(`/api/rent/?region=${region}`)
                .then(res => res.data)
                .then(rents => {
                    dispatch(getRents(rents));
                    resolve();
                })
                .catch(error => {
                    dispatch(setError(error));
                    reject();
                })
        })
    }
}