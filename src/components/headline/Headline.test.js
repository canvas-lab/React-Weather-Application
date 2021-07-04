import React from 'react';
import { shallow } from 'enzyme';
import { findComponentAttribute, checkMyPropTypes } from './../../utils/TestUtils.js';
import Headline from './Headline.js';

const setup = (props={}) =>
{
    const component = shallow(<Headline {...props}/>);
    return component;
}

describe('Headline component test', ()=>
{

    describe('Headline props test', ()=>
    {
        test('should have no warning', ()=>
        {
            const myProps = 
            {
                headerOfHeadline: 'test headerOfHeadline', 
                descpOfHeadline: 'test descpOfHeadline'
            };

            const myPropsResult = checkMyPropTypes(Headline, myProps);
            expect(myPropsResult).toBeUndefined();
        });
    });



    describe('Headline have props test', ()=>
    {
        let component;
        beforeEach(()=>
        { 
            const props =
            {
                headerOfHeadline: 'test headerOfHeadline', 
                descpOfHeadline: 'test descpOfHeadline'
            };  

            component=setup(props); 
        });
    
        test('should render Headline test', ()=>
        {
            const wrapper = findComponentAttribute(component, 'headline-component');
            expect(wrapper.length).toBe(1);
        });

        test('should render Headline header test', ()=>
        {
            const headlineHeader = findComponentAttribute(component, 'headline-header');
            expect(headlineHeader.length).toBe(1);
        });

        test('should render Headline description test', ()=>
        {
            const headlineDescription = findComponentAttribute(component, 'headline-description');
            expect(headlineDescription.length).toBe(1);
        });
    });

    describe('Headline does not have props test', ()=>
    {
        let component;
        beforeEach(()=>
        {
            component=setup();
        });

        test('should not render Headline test', ()=>
        {
            const wrapper = findComponentAttribute(component, 'headline-component');
            expect(wrapper.length).toBe(0);
        });
    });
    
});
