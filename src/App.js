import {useState,useEffect} from 'react'

import Navbar from './Components/Navigation/Navbar';
import {Routes,Route} from 'react-router-dom';
import Home from './Home/Home';
import Favorite from './Favorite/Favorite';
import Contact from './Contact/Contact';
import NotFound from './Components/notFound/NotFound';
import Recipie from './Recipie/Recipie';
import Context from './DataStore/Context';

function App() {
  const appId='1cfbdff4';
  const appKey='74ba7c7b51afa32db443bbf058520bcd';
  
  const[recipies,setRecipies]=useState([]); 


  useEffect(()=>{
    fetch(`https://api.edamam.com/search?q=chicken&app_id=${appId}&app_key=${appKey}`)
   
   .then(response => 
     response.json())
     //response.json())
   .then(data=>{
     setRecipies(data.hits)
     console.log(data.hits) 
   })
 },[])











  return (
    <div className="App">
     <Navbar/>
  

 
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/favorite" element={<Favorite/>}/>
       <Route path="/recipie" element={<Recipie/>}/>
       <Route path="/contact" element={<Contact/>}/>
       <Route path="*" element={<NotFound/>}/>
     </Routes>
 
    </div>
  );
}

export default App;
