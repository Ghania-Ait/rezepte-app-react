import React,{useContext} from 'react';
import'../Components/RecipeCard/RecipeCard.css';
import '../../src/Recipie/Recipie.css';
import './favorite.css';
import {Context} from '../Context/Context';
import {Link} from 'react-router-dom';
//import RecipeCard from '../Components/RecipeCard/RecipeCard';


 function Favorite(props) {
    
const{recipeFav,recipies}= useContext(Context)
    const neuArray= recipies.filter((item)=>recipeFav.includes(item.recipe.label))


    return (
        <div className="App-fav"  >
              <div className="recipies-fav">
              {neuArray.map(recipe =>{
                return (


             <div className="recipe-fav">
            
          
            <img className="img-fav" src={recipe.recipe.image} alt={recipe.recipe.title}/>
              
             <div className="container-fav"> 
            
                <div><h5>Calories:</h5>{recipe.recipe.calories}</div> 
                <div><h5>Cuisine-type</h5>{recipe.recipe.cuisineType[0]}</div> 
                <div><h5>Diet-Labels</h5>{recipe.recipe.dietLabels[0]}</div>  
                
                <Link to='/recipe/recipeCard/ingredients' ><h3>{recipe.recipe.label}</h3> </Link>
              
              
               
            </div>
            <button ><i className="fas fa-trash-alt"></i></button>
          
        </div>
                // <RecipeCard
                // key={recipe.recipe.label}
                // title={recipe.recipe.label}
                // cuisineType={recipe.recipe.cuisineType[0]}
                // dietLabels={recipe.recipe.dietLabels[0]}
                // calorie= {recipe.recipe.calories}  
                // image={recipe.recipe.image}
                // ingredients={recipe.recipe.ingredients}
                // recipe={recipe}/>
                
                  )
               

                
            })}
            
                 </div>





            {/* <img className="img" src={newRecipe.image} alt={newRecipe.title}/>
              
             <div className="container"> 
            
             <ol className='ingredients'>
                    { newRecipe.Ingredients.map(ingredient =>( 
                        <li>{ingredient.text} </li>
                        
                        
                    ))
                    }
                    
                </ol>     */}

            
              
              
               
            </div>
            
       
    )


}



export default Favorite;
