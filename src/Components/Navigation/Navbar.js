import React from 'react';
//import {NavLink} from 'react-router-dom';
import './navbar.css'

export function Navbar() {
    const activClass = ({isActive})=>isActive ? 'activLink': '' 


    return (
        <nav className= 'liste'>
          <ul className="liste">
              <li className='items'>Home</li>
              <li className="items">Favorite</li>
              <li className="items">Contact</li>
          </ul>
          <button className="btn">BTN</button>

        </nav>


        //    {/* <NavLink 
        //    to='/'
        //    className={({isActive})=>isActive ? 'activLink': '' }>Home</NavLink>


        //    <NavLink to='/favorite' className={({isActive})=>isActive ? 'activLink': '' }>Favorite</NavLink>


        //    <NavLink to='/contact' className={({isActive})=>isActive ? 'activLink': '' }>Contact</NavLink>
        //     */}
       
    )
}
export default Navbar;
