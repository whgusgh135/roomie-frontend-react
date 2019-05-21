import { SET_ERROR, SET_REDIRECT, SET_PAGE, SET_STATUS } from '../actionTypes';

export const setError = error => ({
    type: SET_ERROR,
    error
});

export const setRedirect = redirect => ({
    type: SET_REDIRECT,
    redirect
});

export const setPage = page => ({
    type: SET_PAGE,
    page
});

export const setStatus = status => ({
    type: SET_STATUS,
    status
})