import './App.css';
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import BasicExample from "./Navbar"
import Carousal from "./Carousal"
import Blues from './Blues'
import Places from './Trips'



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <BasicExample/>
      <Carousal/>
      <Blues/>
      <Places/>
     </BrowserRouter>
      
    </div>
  );
}

export default App;
