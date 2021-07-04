import checkPropTypes from 'check-prop-types';
import {createStore, applyMiddleware} from 'redux';
import RootReducer from './../reducers/api_data/Reducer.js';
import { middlewares } from './../CreateStore.js';

export const findComponentAttribute = (component, attribute) => 
{
    const wrapper = component.find(`[test-data='${attribute}']`);
    return wrapper;
}

export const checkMyPropTypes = (component, myProps) => 
{
    const myPropsResult = checkPropTypes(component.propTypes, myProps, 'props', component.name);
    return myPropsResult;
}

export const checkStore = (initState) => 
{
    const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
    return createStoreWithMiddleware(RootReducer, initState);
}