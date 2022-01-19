import {useState,useEffect, useContext} from 'react'
import './Recipie.css';
import '../Components/RecipeCard/RecipeCard.css'
import RecipeCard from '../Components/RecipeCard/RecipeCard';
import {Context} from '../Context/Context';

export function Recipie(props) {
    const appId='1cfbdff4';
  const appKey='74ba7c7b51afa32db443bbf058520bcd';

  
  const {recipies,setRecipies,search,setSearch} = useContext(Context)
  
  // state fürs search button 
  const[text,setText]=useState('Chicken');

  

 useEffect(()=>{
    fetch(`https://api.edamam.com/search?q=${text}&app_id=${appId}&app_key=${appKey}`)
   
   .then(response => 
     response.json())
     //response.json())
   .then(data=>{
    


     setRecipies(data.hits)
    
    console.log('fetch', data.hits) 
   })
 },[text])

// function

//  input inhalt holen 
const UpDateSearch= e =>{
    setSearch(e.target.value)
    //console.log(e.target.value)
  }

// function 

const getSearch =(e)=>{
    e.preventDefault()
    setText(search);
    setSearch('')
}



    return (
        <div className="App">
            
      <form  className="search-form" onSubmit={getSearch}>
           
       <input type="text" className="search-bar" placeholder='Worauf hast du appetit?' onChange={UpDateSearch}  />
       <button className="search-btn" type="submit" value={search} >Search</button>
     </form>
        <div className="recipies">
            {recipies.map(recipe =>{
                return (
                <RecipeCard
                key={Math.floor(Math.random() * 8000)}
                title={recipe.recipe.label}
                cuisineType={recipe.recipe.cuisineType[0]}
                dietLabels={recipe.recipe.dietLabels[0]}
                calorie= {recipe.recipe.calories}  
                image={recipe.recipe.image}
                ingredients={recipe.recipe.ingredients}
                recipe={recipe}

                
                />)
            })}



           
        </div>    

            
        </div>
    )
}

export default Recipie
