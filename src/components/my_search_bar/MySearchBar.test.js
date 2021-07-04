import React from 'react';
import {shallow} from 'enzyme';
import { findComponentAttribute, checkMyPropTypes } from './../../utils/TestUtils.js';
import MySearchBar from './MySearchBar.js';

const setup = (props={}) =>
{
    const component = shallow(<MySearchBar {...props}/>);
    return component;
}

describe('MySearchBar component test', () => 
{
    describe('MySearchBar props test', ()=>
    {
        test('should have no warning', ()=>
        {
            const myProps = 
            {
                handleChange: ()=>{}
            };

            const myPropsResult = checkMyPropTypes(MySearchBar, myProps);
            expect(myPropsResult).toBeUndefined();
        });
    });


    describe('MySearchBar have props test', ()=>
    {
        let component;
        let mockFunc;
        beforeEach(()=>
        { 
            mockFunc = jest.fn();
            const props =
            {
                handleChange: mockFunc
            };  

            component=setup(props); 
        });
    
        test('should render MySearchBar test', ()=>
        {
            const wrapper = findComponentAttribute(component, 'search-component');
            expect(wrapper.length).toBe(1);
        });
    });
});
