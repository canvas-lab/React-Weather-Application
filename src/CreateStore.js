import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import RootReducer from './reducers/RootReducer.js';

export const middlewares = [ReduxThunk];
export const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
export const store = createStoreWithMiddleware(RootReducer);
