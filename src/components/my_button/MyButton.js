import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './MyButton.scss';

//MyButton is a reusable component 
//that passes a method as props,
//& emits that method(on click event) to a parent component.
//Then, it will dispatch an action (with redux).
class MyButton extends Component
{
    onClickMyButton()
    {
        if(this.props.eventOfMyButton)
        {
            this.props.eventOfMyButton();
        }
    }    

    render()
    {
        const {textOfMyButton} = this.props;

        return(
            <button className="button-component" test-data="button-component" onClick={()=>this.onClickMyButton()}>
                {textOfMyButton}
            </button>
        );
    }
}

MyButton.propTypes =
{
    textOfMyButton: PropTypes.string,
    eventOfMyButton: PropTypes.func
}

export default MyButton;