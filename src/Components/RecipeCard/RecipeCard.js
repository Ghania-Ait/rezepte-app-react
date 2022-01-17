import React, {useState,useContext,useRef} from 'react'
import './RecipeCard.css';
import '../../Recipie/Recipie.css';
import {Link} from 'react-router-dom';
import {Context} from '../../Context/Context';
import { useEffect } from 'react/cjs/react.development';
import Ingredients from '../Ingredients/Ingredients';





export function RecipeCard({title, calorie,image,ingredients,cuisineType,dietLabels}) {

 //const calories=Math.round({calorie})
// Function 
// State für Like (Hearth)
const {recipies,setRecipies,recipe,recipeFav, setRecipeFav, setNewRecipe} = useContext(Context)

const toggle= useRef(false);


// useEffect(() =>{
//     const addToFavorites=()=>{

//         setRecipeFav([
//             ...recipeFav,{text:{title}, like:'true',id:Math.random()*8000}
           
//         ])
        
//        console.log('1',recipeFav)
//     }

// // console.log('toggle', {toggle})

// if (toggle.current === true ){
//     addToFavorites();
//     saveLocalFavRecipe();

// }
    
// },[toggle])


const saveLocalFavRecipe=()=>{
    //  console.log('savefav')
      if(localStorage.getItem('recipeFav')=== null){
          localStorage.setItem('recipeFav',JSON.stringify([]))
      }else{
          console.log({recipeFav})
          localStorage.setItem('recipeFav',JSON.stringify(recipeFav))
      }
  }

const clickToggle=()=>{
    toggle.current = true;



    const addToFavorites=()=>{

      setRecipeFav([
                    ...recipeFav,{text:{title}, like:'true',id:Math.random()*8000}
                   
                ])
                
               console.log('1',recipeFav)
            }
        
        // console.log('toggle', {toggle})
        
        if (toggle.current === true ){
            console.log(toggle.current)
            addToFavorites();
            saveLocalFavRecipe();
        
        }
  
}




//Function
  // save in Localstorage favorite recipe

//   const saveLocalFavRecipe=()=>{
//     //  console.log('savefav')
//       if(localStorage.getItem('recipeFav')=== null){
//           localStorage.setItem('recipeFav',JSON.stringify([]))
//       }else{
//           console.log({recipeFav})
//           localStorage.setItem('recipeFav',JSON.stringify(recipeFav))
//       }
//   }


const changeClass=()=>{
    // setToggle(!toggle);
    toggle.current = true

    

    //add status for Recipe
}
//  const addToFavorites=()=>{

//     setRecipeFav([
//         ...recipeFav,{text:{title}, like:'true',id:Math.random()*8000}
       
//     ])
    
//    console.log(recipeFav)
// }










    return (
        <div className="recipe">
            
          
            <img className="img" src={image} alt={title}/>
              
             <div className="container"> 
             {/* <h4> Ingredient: </h4>
                <ol>
                    { ingredients.map(ingredient =>( 
                        <li>{ingredient.text} </li>
                        
                    ))}
                </ol> */}
                
                <div><h5>Calories:</h5>{calorie}</div> 
                <div><h5>Cuisine-type</h5>{cuisineType}</div> 
                <div><h5>Diet-Labels</h5>{dietLabels}</div>  
                
          
                {/* <h3>{title} </h3> */}
                <Link to='/recipe/recipeCard/ingredients' onClick={()=> setNewRecipe({Ingredients:ingredients, title:title, image:image})} ><h3>{title}</h3> </Link>
              
              
               
            </div>
            <button className={toggle.current ? 'activeToggle':'fas'} onClick={clickToggle}   ><i className="far fa-heart"></i></button>
          
          


          
        </div>
    )
}
export default RecipeCard 