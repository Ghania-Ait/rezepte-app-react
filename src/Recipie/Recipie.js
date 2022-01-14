import {useState,useEffect} from 'react'
import './Recipie.css'

export function Recipie(props) {
    const appId='1cfbdff4';
  const appKey='74ba7c7b51afa32db443bbf058520bcd';
  
  const[recipies,setRecipies]=useState([]); 

  useEffect(()=>{
    fetch(`https://api.edamam.com/search?q=chicken&app_id=${appId}&app_key=${appKey}`)
   
   .then(response => 
     response.json())
     //response.json())
   .then(data=>{
     setRecipies(data.hits)
     console.log(data.hits) 
   })
 },[])

// function




    return (
        <div className="App">
            
            <form  className="search-form" >
            <h1></h1>
       <input type="text" className="search-bar" placeholder='Worauf hast du appetit?'/>
       <button className="search-btn" type="submit">Search</button>
     </form>
            

            
        </div>
    )
}

export default Recipie
