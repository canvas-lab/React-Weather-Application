import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import { findComponentAttribute, checkStore } from './utils/TestUtils.js';

const setup = (initState={}) =>
{
    const store = checkStore(initState);
    const component = shallow(<App store={store}/>).childAt(0).dive();//test for redux: dive() helps rendering the content of the components
    return component;
}

describe('App component test', ()=>
{
    let component;
    beforeEach(()=>
    {
        const myInitState = 
        {
            apiData:
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
        }
        component = setup(myInitState);
    });

    test('test a connected component connected to the reduct store, should have no warning', ()=>
    {
        const wrapper = findComponentAttribute(component, 'app-component');
        expect(wrapper.length).toBe(1);
    });
});