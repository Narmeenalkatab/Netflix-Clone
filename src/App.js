import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import FavList from './Components/FavList /FavList';
import NavBar from './Components/Navbar/Navbar';


function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favList" element={<FavList/>} />
      </Routes>
    </>
  );
}
export default App;
