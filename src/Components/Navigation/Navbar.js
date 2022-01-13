import React from 'react';
import {Link} from 'react-router-dom';

export function Navbar() {
    

    return (
        <nav>
           <Link to='/'>Home</Link>
           <Link to='/favorite'>Favorite</Link>
           <Link to='contact'>Contact</Link>
           
        </nav>
    )
}
export default Navbar;
