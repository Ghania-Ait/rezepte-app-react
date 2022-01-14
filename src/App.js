

import Navbar from './Components/Navigation/Navbar';
import {Routes,Route} from 'react-router-dom';
import Home from './Home/Home';
import Favorite from './Favorite/Favorite';
import Contact from './Contact/Contact';
import NotFound from './Components/notFound/NotFound';
import Recipie from './Recipie/Recipie';

import './App.css'

function App() {
  

 


  return (
    <div >
     <Navbar/> 
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/favorite" element={<Favorite/>}/>
       <Route path="/recipe" element={<Recipie/>}/>
       <Route path="/contact" element={<Contact/>}/>
       <Route path="*" element={<NotFound/>}/>
     </Routes>
 
    </div>
  );
}

export default App;
