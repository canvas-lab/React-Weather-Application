import React from 'react';
import {shallow} from 'enzyme';
import { findComponentAttribute, checkMyPropTypes } from './../../utils/TestUtils.js';
import WeatherItem from './WeatherItem.js';

const setup = (props={}) =>
{
    const component = shallow(<WeatherItem {...props}/>);
    return component;
}

describe('WeatherItem component test', () => 
{
    describe('WeatherItem props test', ()=>
    {
        test('should have no warning', ()=>
        {
            const myProps = 
            {
                name: 'test nameOfItems', 
                country: 'test countryOfItems', 
                description: 'test descriptionOfItems', 
                temp: 282.97, 
                temp_max: 285.19, 
                temp_min: 280.25, 
                pressure: 1028, 
                humidity: 86, 
                feels_like: 281.39, 
                getDate: ()=>{}
            };

            const myPropsResult = checkMyPropTypes(WeatherItem, myProps);
            expect(myPropsResult).toBeUndefined();
        });
    });


    describe('WeatherItem have props test', ()=>
    {
        let component;
        let mockFunc;
        beforeEach(()=>
        { 
            mockFunc = jest.fn();
            const props =
            {
                name: 'test nameOfItems', 
                country: 'test countryOfItems', 
                description: 'test descriptionOfItems', 
                temp: 282.97, 
                temp_max: 285.19, 
                temp_min: 280.25, 
                pressure: 1028, 
                humidity: 86, 
                feels_like: 281.39, 
                getDate: mockFunc
            };  

            component=setup(props); 
        });
    
        test('should render WeatherItem test', ()=>
        {
            const wrapper = findComponentAttribute(component, 'weather-item-component');
            expect(wrapper.length).toBe(1);
        });

        test('should render WeatherItem location test', ()=>
        {
            const weatherLocation = findComponentAttribute(component, 'weather-item-location');
            expect(weatherLocation.length).toBe(1);
        });

        test('should render WeatherItem description test', ()=>
        {
            const weatherDescription = findComponentAttribute(component, 'weather-item-description');
            expect(weatherDescription.length).toBe(1);
        });
    });

    describe('WeatherItem does not have props test', ()=>
    {
        let component;
        beforeEach(()=>
        {
            const myProps = 
            {
                description: 'test descriptionOfItems' 
            }
            component=setup(myProps);
        });

        test('should not render WeatherItem test', ()=>
        {
            const wrapper = findComponentAttribute(component, 'weather-item-component');
            expect(wrapper.length).toBe(0);
        });
    });
});
