import React,{useContext} from 'react';
import { Context } from '../../Context/Context';
import './ingredients.css';
import {Link} from 'react-router-dom'

export function Ingredients(props) {
    const {recipies,newRecipe}=useContext(Context)
   
    
    return (

        <div className="container-ingredients">
            

            <section className="section-ingredients">
            <p>{newRecipe.title} </p>
           <img src={newRecipe.image} alt={newRecipe.title} />
              <h4> Ingredients: </h4>
                 <ol className='ingredients'>
                    { newRecipe.Ingredients.map(ingredient =>( 
                        <li>{ingredient.text} </li>
                        
                        
                    ))
                    }
                    {/* <li>{ingredients.text}</li> */}
                </ol>    
                <button className="add-fav-btn">Add to favorite list</button>
            </section>
            <Link to='/recipe'><i class="fas fa-arrow-alt-circle-left"></i><p>   Retour to Recipe </p> </Link>
           
           
        </div>
    )
}
export default Ingredients;
