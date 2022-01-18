import { createContext, useState ,useEffect} from "react";
export const Context = createContext();

const ContextProvider= props =>{
    const[recipies,setRecipies]=useState([]); 
    const [search,setSearch]=useState('');

    const [status,setStatus]=useState('false');
    const[recipeFav, setRecipeFav]=useState([]);

    const[newRecipe, setNewRecipe]=useState('');
    
    const[leseListe,setLeseListe]=useState([]);




// tested ob im Localstorage daten gespeichert sind
useEffect(() =>{

    const getLocalListe= ()=>{
         if(localStorage.getItem('leseListe') === null){
           localStorage.setItem('leseListe', JSON.stringify([]));
         }else{
          let listeLocal= JSON.parse(localStorage.getItem('leseListe'));
          setLeseListe(listeLocal);
        
      }
      }
      getLocalListe();
    
 },[])

//    useEffect(()=>{
//    recipies.map((recipie)=>{
//       recipie.favRecipe= true;
//       return recipie
//    })

// console.log(recipies)

//    },[recipies])








    return (
        <Context.Provider value={{recipies,setRecipies,search,setSearch,setStatus, recipeFav,setRecipeFav,newRecipe, setNewRecipe,leseListe,setLeseListe}}>
            {props.children}
        </Context.Provider>
    )
}
export default ContextProvider;