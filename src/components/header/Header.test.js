import React from 'react';
import { shallow } from 'enzyme';

import { findComponentAttribute } from './../../../TestUtils/TestUtils.js';

import Header from './Header.js';


const setup = (props={}) =>
{
    const component = shallow(<Header {...props}/>);
    return component;
}

describe('Header component test', () => 
{
    let component;
    beforeEach(() => 
    {
        component = setup();
    });

    test('should render const Header test', () => 
    {
        /**
          * console.log(component.debug());
          * const component = shallow(<Header/>);
          * const wrapper = component.find('.header');
          * expect(wrapper.length).toBe(1);
         */

        const wrapper = findComponentAttribute(component, 'header-component');
        expect(wrapper.length).toBe(1);
    });
    
});

