
import './App.css';
import Navbar from './Components/Navigation/Navbar';
import {Routes,Route} from 'react-router-dom';
import Home from './Home/Home';
import Favorite from './Favorite/Favorite';
import Contact from './Contact/Contact';
import NotFound from './Components/notFound/NotFound';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/favorite" element={<Favorite/>}/>
       <Route path="/contact" element={<Contact/>}/>
       <Route path="*" element={<NotFound/>}/>
     </Routes>
    </div>
  );
}

export default App;
