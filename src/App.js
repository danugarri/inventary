import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import './App.css';
import { Home } from './components/Home/Home';
import { SellOption } from "./components/SellOption/SellOption";
import { Stock } from "./components/Stock/Stock";



 const App = () => {
  return (

     <Router>
       <Routes>
        <Route  path= '/' element = {<Home/>}  />
        <Route  path='/sell' element = {<SellOption/>} />
         <Route  path='/stock' element = {<Stock/>} />
       </Routes>
      </Router>
    
  );
}
export default App;

