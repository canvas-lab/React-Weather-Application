import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Headline.scss';

class Headline extends Component {
    render() {

        const {headerOfHeadline, descpOfHeadline} = this.props;

        if(!headerOfHeadline)
        {
            return null;
        }

        return (
            <div className="headline-component" test-data="headline-component">
                <h1 className="headline-header" test-data="headline-header">{headerOfHeadline}</h1>
                <p className="headline-description" test-data="headline-description">{descpOfHeadline}</p>
            </div>
        );
    }
}

Headline.propTypes = 
{
    headerOfHeadline: PropTypes.string,
    descpOfHeadline: PropTypes.string
}

export default Headline;
