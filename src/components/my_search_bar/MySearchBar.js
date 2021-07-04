import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './MySearchBar.scss';

class MySearchBar extends Component
{
    render()
    {
        const {handleChange} = this.props;
        return(
            <input className="search-component" test-data="search-component" onChange={handleChange} type="text" placeholder="Search a city's weather..."/>
        );
    }
}

MySearchBar.propTypes = 
{
    handleChange: PropTypes.func
}

export default MySearchBar;