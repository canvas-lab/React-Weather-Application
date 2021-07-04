import {myTypes} from './../../actions/MyTypes.js'
import apiDataReducer from './Reducer.js';

describe('API data reducer test', ()=>
{
    test('should return a default state test', ()=>
    {
        const stateResult = apiDataReducer(undefined, {});
        expect(stateResult).toEqual([]);
    });

    test('should return a new state if it receives the correct type', ()=>
    {
        const apiDataTest=
            {
                country: 'test Country', 
                description: 'test Description', 
                feels_like: 281.39, 
                humidity: 86, 
                icon: "02d",
                id: 234,
                name: "test Name",
                pressure: 1028, 
                temp: 282.97, 
                temp_max: 285.19, 
                temp_min: 280.25, 
            }
        const stateResult = apiDataReducer(undefined, 
        {
            type: myTypes.GET_API_DATA,
            payload: apiDataTest
        });
        expect(stateResult).toEqual(apiDataTest);
    });
});