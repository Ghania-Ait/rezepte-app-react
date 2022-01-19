import React,{useContext,useEffect,useState} from 'react';
import { Context } from '../../Context/Context';
import './ingredients.css';
import {Link} from 'react-router-dom'

export function Ingredients(props) {
    const {recipies,newRecipe,recipeFav, setRecipeFav,leseListe,recipe,setNewRecipe} = useContext(Context)
const[desactivatedBtn, setDesactivatedBtn]=useState(false)
    // Add to Favorite List

    const addToFavListe=()=>{
        const titleFav= newRecipe.title
       // console.log('newRecipe',titleFav)
        setRecipeFav([
            
            ...recipeFav, titleFav
        ])

       // console.log('recipefavorie', recipeFav);
    }

       
    const saveFavRezepte=()=>{


     if (recipeFav.find((item)=>item===newRecipe.title)){
         const resultFilterFav =recipeFav.filter((item)=>item !== newRecipe.title)
         setRecipeFav(resultFilterFav)
        
     }else{
      
         addToFavListe()
     }

setDesactivatedBtn(!desactivatedBtn)



}


             


useEffect(()=>{
    
    localStorage.setItem('recipeFav',JSON.stringify(recipeFav));
   // console.log(leseListe)
},[recipeFav])



useEffect(() =>{
    if (recipeFav.find((item)=>item===newRecipe.title)){
        setDesactivatedBtn(true)
    }
},[])








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
                    
                </ol>    
                <button className="add-fav-btn" onClick={saveFavRezepte} disabled={desactivatedBtn}> {desactivatedBtn? 'Already added': 'Add to favorite list' } </button>
            </section>
            <Link to='/recipe'><i className="fas fa-arrow-alt-circle-left"></i><p>   Retour to Recipe </p> </Link>
           
           
        </div>
    )
}
export default Ingredients;
