import React from 'react';
import {shallow} from 'enzyme';
import { findComponentAttribute, checkMyPropTypes } from './../../utils/TestUtils.js';
import MyButton from './MyButton.js';

const setup = (props={}) =>
{
    const component = shallow(<MyButton {...props}/>);
    return component;
}

describe('MyButton component test', ()=>
{
    describe('MyButton props test', ()=>
    {
        test('should have no warning', ()=>
        {
            const myProps=
            {
                textOfMyButton: 'test textOfMyButton',
                eventOfMyButton: ()=>{}
            }

            const propsResult = checkMyPropTypes(MyButton, myProps);
            expect(propsResult).toBeUndefined();
        });
    });

    describe('MyButton have props test', ()=>
    {
        let component;
        let mockFunc;
        beforeEach(()=>
        {
            mockFunc = jest.fn();
            const myProps = 
            {
                textOfMyButton: 'test textOfMyButton',
                eventOfMyButton: mockFunc
            }

            component = setup(myProps);
        });

        test('should render MyButton test', ()=>
        {
            const wrapper = findComponentAttribute(component, 'button-component');
            expect(wrapper.length).toBe(1);
        });
        
        test('should emit MyButton event test', ()=>
        {
            const wrapper = findComponentAttribute(component, 'button-component');
            wrapper.simulate('click');
            const callback = mockFunc.mock.calls.length;
            expect(callback).toBe(1);
        });
    });
});