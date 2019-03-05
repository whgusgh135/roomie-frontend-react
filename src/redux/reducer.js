import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'; // needs thunk for asynchronous dispatch

import { authReducer } from './reducers/authReducer';
import { statusReducer } from './reducers/statusReducer';
import { roomieReducer } from './reducers/roomieReducer';
import { rentReducer } from './reducers/rentReducer';
import { messageReducer } from './reducers/messageReducer';

// combine all reducers
const rootReducer = combineReducers({
    authReducer,
    statusReducer,
    roomieReducer,
    rentReducer,
    messageReducer
});

// create store
export function configureStore() {
    const store = createStore(
        rootReducer,
        compose(
            applyMiddleware(thunk),
            // needs this for redux browser extension for dev purpose
            window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    )
    return store;
}