import './App.css';
import { BrowserRouter, Routes,Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import BasicExample from "./Navbar"
import Home from './Home';
import Placetovisit from './Placetovisit';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <BasicExample/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/placetovisit" element={<Placetovisit/>} />

      
      </Routes>
     </BrowserRouter>
      
    </div>
  );
}

export default App;
