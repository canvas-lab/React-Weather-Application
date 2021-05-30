import React from 'react';
import './Header.scss';

const Header = (props) => {
    return (
        <header className="header-component" test-data="header-component">
        <div className="header-wrapper">
            <div className="header-app-title"> React Test <i class="fas fa-mug-hot"></i> </div>
        </div>
        </header>
    );
}

export default Header;

