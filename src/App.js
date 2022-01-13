
import './App.css';
import Navbar from './Components/Navigation/Navbar';
import {Routes,Route} from 'react-router-dom';
import Home from './Home/Home'

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routes>
       <Route path="/home" element={<Home/>}/>
     </Routes>
    </div>
  );
}

export default App;
