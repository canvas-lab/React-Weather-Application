import {myTypes} from './../../actions/MyTypes.js';

export default(state=[], action) =>{
    switch(action.type)
    {
        case myTypes.GET_API_DATA:
            return action.payload;
        default:
            return state;
    }
};