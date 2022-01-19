import React, {useState,useContext} from 'react'
import './RecipeCard.css';
import '../../Recipie/Recipie.css';
import {Link} from 'react-router-dom';
import {Context} from '../../Context/Context';
import { useEffect } from 'react/cjs/react.development';






export function RecipeCard({title, calorie,image,ingredients,cuisineType,dietLabels}) {

 
const {recipies,setRecipies,recipe,recipeFav, setRecipeFav, setNewRecipe,leseListe,setLeseListe} = useContext(Context)


const [toggle, setToggle]= useState(false);

// Add to lese Liste
const addToLeseListe=()=>{
    setLeseListe([
                       ...leseListe, {title}
                      
                   ])
                   
                 // console.log('1',leseListe)
               }

// speichert leseRezepte
const saveLeseRezepte=()=>{

   if (leseListe.find((item)=> item.title===title )) {
     const resultFilter = leseListe.filter((item)=>item.title !== title)
     setLeseListe(resultFilter)
   }else{
    addToLeseListe() 
   }


      
  }


const filtredRecipe=()=>{
 
   const findTitle=leseListe.find((item)=> item.title === title);

    setToggle(findTitle)


}


useEffect(()=>{
    filtredRecipe();
    localStorage.setItem('leseListe',JSON.stringify(leseListe));
   // console.log(leseListe)
},[leseListe])




    return (
        <div className="recipe">
            
          
            <img className="img" src={image} alt={title}/>
              
             <div className="container"> 
            
                <div><h5>Calories:</h5>{calorie}</div> 
                <div><h5>Cuisine-type</h5>{cuisineType}</div> 
                <div><h5>Diet-Labels</h5>{dietLabels}</div>  
                
                <Link to='/recipe/recipeCard/ingredients' onClick={()=> setNewRecipe({Ingredients:ingredients, title:title, image:image, cuisineType:cuisineType})} ><h3>{title}</h3> </Link>
              
              
               
            </div>
            <button className={toggle ? 'activeToggle':'fas'} onClick={saveLeseRezepte}><i className="far fa-heart"></i></button>
          
        </div>
    )
}



export default RecipeCard 