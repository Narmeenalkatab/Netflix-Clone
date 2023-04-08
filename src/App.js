import './App.css';
// import { Routes,Route} from "react-router-dom"
import { Routes, Route , Router} from "react-router-dom";
import Home from './Components/Home/Home';


function App() {
  return (
   <>
<Router>

<Routes>

<Route path='/' element={<Home/>}/>

</Routes>

</Router>



   </>
  );
}

export default App;
