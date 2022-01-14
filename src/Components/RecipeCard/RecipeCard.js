import React from 'react'
import './RecipeCard.css';
import '../../Recipie/Recipie.css';


export function RecipeCard({title, calorie,image,ingredients,cuisineType,dietLabels}) {

 //const calories=Math.round({calorie})
// Function 








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
                
                <p><h5>Calories:</h5>{calorie} </p>
                <p><h5>Cuisine-type</h5>{cuisineType} </p>
                <p><h5>Diet-Labels</h5>{dietLabels}  </p>
                <h3>{title} </h3>
               
            </div>
            
        </div>
    )
}
export default RecipeCard 