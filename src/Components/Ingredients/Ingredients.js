import React,{useContext} from 'react';
import { Context } from '../../Context/Context';
import './ingredients.css';
import {Link} from 'react-router-dom'

export function Ingredients(props) {
    const {recipies,newRecipe}=useContext(Context)
   
     console.log(newRecipe)
    return (

        <div>
            <section className="section-ingredients">

            <h1>{newRecipe.title} </h1>
           <img src={newRecipe.image} alt={newRecipe.title} />
              <h4> Ingredient: </h4>
                 <ol className='ingredients'>
                    { newRecipe.Ingredients.map(ingredient =>( 
                        <li>{ingredient.text} </li>
                        
                        
                    ))
                    }
                    {/* <li>{ingredients.text}</li> */}
                </ol>    
            </section>
            <Link to='/recipe'><p>   Retour to Recipe </p> </Link>
           
        </div>
    )
}
export default Ingredients;
