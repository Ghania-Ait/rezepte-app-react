import React,{useContext} from 'react';

import './favorite.css';
import {Context} from '../Context/Context';


 function Favorite(props) {
    
const{setNewRecipe,newRecipe}= useContext(Context)
    

    return (
        <div className="recipe">
            
          
            <img className="img" src={newRecipe.image} alt={newRecipe.title}/>
              
             <div className="container"> 
            
             <ol className='ingredients'>
                    { newRecipe.Ingredients.map(ingredient =>( 
                        <li>{ingredient.text} </li>
                        
                        
                    ))
                    }
                    
                </ol>    

                <h3>{newRecipe.title}</h3> 
              
              
               
            </div>
            
        </div>
    )


}



export default Favorite;
