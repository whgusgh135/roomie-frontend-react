import { SET_ERROR, SET_REDIRECT } from '../actionTypes';

export const setError = error => ({
    type: SET_ERROR,
    error
});

export const setRedirect = redirect => ({
    type: SET_REDIRECT,
    redirect
});