import React from 'react'
import './RecipeCard.css'
export function RecipeCard({title, calorie,image,ingredients}) {

 //const calories=Math.round({calorie})

    return (
        <div className="recipe">
            
           
            <img src={image} alt={title}/>
              
            <div className="container">
                <h3> Ingredient: </h3>
                <ol>
                    { ingredients.map(ingredient =>( 
                        <li>{ingredient.text} </li>
                        
                    ))}
                </ol>
               

                <h2>{title} </h2>
                <p><h3>Calories:</h3>{calorie} </p>
               
            </div>
            
        </div>
    )
}
export default RecipeCard 