import React, { Component } from 'react';

class Headline extends Component {

    constructor(props)
    {
        super(props);
    }

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

export default Headline;
