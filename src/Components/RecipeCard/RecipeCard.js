import React, {useState} from 'react'
import './RecipeCard.css';
import '../../Recipie/Recipie.css';
import {NavLink} from 'react-router-dom';





export function RecipeCard({title, calorie,image,ingredients,cuisineType,dietLabels}) {

 //const calories=Math.round({calorie})
// Function 
// State für Like (Hearth)
const[toggle, setToggle]=useState();
const changeState=()=>{
    setToggle(!toggle);
}









    return (
        <div className="recipe">
            
          
            <img src={image} alt={title}/>
              
             <div className="container"> 
             {/* <h4> Ingredient: </h4>
                <ol>
                    { ingredients.map(ingredient =>( 
                        <li>{ingredient.text} </li>
                        
                    ))}
                </ol> */}
                
                <div><h5>Calories:</h5>{calorie}</div> 
                <div><h5>Cuisine-type</h5>{cuisineType}</div> 
                <div><h5>Diet-Labels</h5>{dietLabels}</div>  
                
          
                {/* <h3>{title} </h3> */}
                <NavLink to='/Ingredients'><h3>{title}</h3> </NavLink>
              
               
            </div>
            <button className={toggle? 'activeToggle':'fas'} onClick={changeState} ><i className="far fa-heart"></i></button>
          
          


          
        </div>
    )
}
export default RecipeCard 