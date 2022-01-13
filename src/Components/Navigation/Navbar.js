import React, {useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import './navbar.css'

export function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false);
    const[width, setWidth]=useState(window.innerWidth);

    const toggleNavSmallScreen = ()=>{
        setToggleMenu(!toggleMenu);
    }




    useEffect(()=>{
      const changeWidth=()=>{
          setWidth(window.innerWidth);
        if(window.innerWidth > 500){
            setToggleMenu(false);
        }
      }

        window.addEventListener('resize', changeWidth)

        return ()=> {
            window.removeEventListener('resize', changeWidth)
        }
    },[])


    return (
        <nav >
            {(toggleMenu || width > 500) &&( <ul className="liste">
          <NavLink to='/' className='items' style={({isActive})=>{
              return isActive ? {color:'red'}:{color:'violet'}
          }}>Home</NavLink>
          <NavLink to='/favorite' className="items" style={({isActive})=>{
              return isActive ? {color:'red'}:{color:'violet'}
          }}>Favorite</NavLink>
          <NavLink to='/contact' className="items" style={({isActive})=>{
              return isActive ? {color:'red'}:{color:'violet'}
          }}>Contact</NavLink>
         </ul> )}
          
        
        
          
          <button className="btn" onClick={toggleNavSmallScreen}><a href="https://www.flaticon.com/free-icons/menu" title="menu icons"></a></button>

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
