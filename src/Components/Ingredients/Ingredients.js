import React,{useContext} from 'react';
import { Context } from '../../Context/Context';
import './ingredients.css'

export function Ingredients(props) {
    const {recipies,ingredients}=useContext(Context)
    console.log({recipies})
     
    return (
        <div>
           <h4> Ingredient: </h4>
                <ol className='ingredients'>
                    { ingredients.map(ingredient =>( 
                        <li>{ingredient.text} </li>
                        
                        
                    ))
                    }
                </ol>   
        </div>
    )
}
export default Ingredients;
