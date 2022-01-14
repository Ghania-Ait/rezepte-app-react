import {useState,useEffect} from 'react'
import './Recipie.css'

export function Recipie(props) {
    const appId='1cfbdff4';
  const appKey='74ba7c7b51afa32db443bbf058520bcd';
  
  //daten  mit API Holen 
  const[recipies,setRecipies]=useState([]); 

  //state für suche nach Rezepte
  const [search,setSearch]=useState('');

  

  useEffect(()=>{
    fetch(`https://api.edamam.com/search?q=chicken&app_id=${appId}&app_key=${appKey}`)
   
   .then(response => 
     response.json())
     //response.json())
   .then(data=>{
     setRecipies(data.hits)
    // console.log(data.hits) 
   })
 },[])

// function

//  input werte holen 
const UpDateSearch= e =>{
    setSearch(e.target.value)
    console.log(e.target.value)
  }



    return (
        <div className="App">
            
            <form  className="search-form" >
           
       <input type="text" className="search-bar" placeholder='Worauf hast du appetit?' onChange={UpDateSearch}/>
       <button className="search-btn" type="submit" value={search} >Search</button>
     </form>
            

            
        </div>
    )
}

export default Recipie
