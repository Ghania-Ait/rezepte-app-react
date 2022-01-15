import { createContext, useState } from "react";
export const Context = createContext();

const ContextProvider= props =>{
    const[recipies,setRecipies]=useState([]); 
    const [search,setSearch]=useState('');

    return (
        <Context.Provider value={{recipies,setRecipies,search,setSearch}}>
            {props.children}
        </Context.Provider>
    )
}
export default ContextProvider;