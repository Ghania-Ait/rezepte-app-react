

import Navbar from './Components/Navigation/Navbar';
import {Routes,Route} from 'react-router-dom';
import Home from './Home/Home';
import Favorite from './Favorite/Favorite';
import Contact from './Contact/Contact';
import NotFound from './Components/notFound/NotFound';
import Recipie from './Recipie/Recipie';
import ContextProvider from './Context/Context';
import Ingredients from './Components/Ingredients/Ingredients';



import './App.css'

function App() {
  

  return (
    <div >
      <Navbar/>  
     <ContextProvider>
     <Routes>
       {/* <Route path="/" element={<Home/>}/> */}
       <Route path="/favorite" element={<Favorite/>}/>
       <Route path="/" element={<Recipie/>}/>
       <Route path="/recipe" element={<Recipie/>}/>
       <Route path='/recipe/recipeCard/ingredients' element={<Ingredients/>}/>
       {/* <Route path='/recipe/recipeCard' element={<RecipeCard/>}/> */}
       <Route path="/contact" element={<Contact/>}/>
       <Route path="*" element={<NotFound/>}/>
     </Routes>
     </ContextProvider>
     
    </div>
  );
}

export default App;
