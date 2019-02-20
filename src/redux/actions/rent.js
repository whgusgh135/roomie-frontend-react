import axios from 'axios';
import { GET_RENT } from '../actionTypes';
import { setError, setRedirect } from './status';

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
                    dispatch(setRedirect("home"));
                    resolve();
                })
                .catch(error => {
                    dispatch(setError(error.response.data.error));
                    reject();
                })
        })
    }
}

export const searchRentsByRegion = (region) => {
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

export const searchRentsByNumResidents = (numRes) => {
    return dispatch => {
        return new Promise((resolve, reject) => {
            return axios.get(`/api/rent/?numRes=${numRes}`)
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

export const searchRentsByRent = (rent) => {
    return dispatch => {
        return new Promise((resolve, reject) => {
            return axios.get(`/api/rent/?rent=${rent}`)
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