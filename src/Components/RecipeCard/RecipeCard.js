import React from 'react'
import './RecipeCard.css';
import '../../Recipie/Recipie.css'
export function RecipeCard({title, calorie,image,ingredients}) {

 //const calories=Math.round({calorie})

    return (
        <div className="recipe">
            
           
            <img src={image} alt={title}/>
              
             <div className="container"> 
                <h4> Ingredient: </h4>
                <ol>
                    { ingredients.map(ingredient =>( 
                        <li>{ingredient.text} </li>
                        
                    ))}
                </ol>
                <h3>{title} </h3>
                <p><h5>Calories:</h5>{calorie} </p>
               
            </div>
            
        </div>
    )
}
export default RecipeCard 