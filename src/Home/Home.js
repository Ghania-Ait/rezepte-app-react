import React from 'react'
import './Home.css'
import Caroussel from '../Components/Caroussel/Caroussel'

export function Home(props) {
    

    return (
        <div className="Container-home">
          <h1 className="home-title">Welcome To Home</h1>  
           <Caroussel/>
        
        </div>
    )
}
export default Home
