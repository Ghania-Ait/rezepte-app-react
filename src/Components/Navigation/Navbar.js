import React from 'react';
import {Link} from 'react-router-dom'

export function Navbar() {
    

    return (
        <div>
           <Link to='/'>Home</Link>
           <Link to='/favorite'>Favorite</Link>
           <Link to='contact'>Contact</Link>
           
        </div>
    )
}
export default Navbar;
