import React from 'react';
import { Link } from 'react-router-dom';

// Should make these links
const Header = () => {
    return (
        <nav>
                <Link to='/'>Home</Link>
                {'  |  '}
                <Link to='/restaurants'>Restaurants</Link>
        </nav>
    );
};

export default Header;