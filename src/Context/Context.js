import { createContext, useState ,useEffect} from "react";
export const Context = createContext();

const ContextProvider= props =>{
    const[recipies,setRecipies]=useState([]); 
    const [search,setSearch]=useState('');

    const [status,setStatus]=useState('false');
    const[recipeFav, setRecipeFav]=useState([]);

    const[newRecipe, setNewRecipe]=useState('')

//    useEffect(()=>{
//    recipies.map((recipie)=>{
//       recipie.favRecipe= true;
//       return recipie
//    })

// console.log(recipies)

//    },[recipies])








    return (
        <Context.Provider value={{recipies,setRecipies,search,setSearch,setStatus, recipeFav,setRecipeFav,newRecipe, setNewRecipe}}>
            {props.children}
        </Context.Provider>
    )
}
export default ContextProvider;