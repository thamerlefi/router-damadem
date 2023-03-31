import { Route, Routes } from "react-router-dom";
import Add from "./components/Add";
import Deatils from "./components/Deatils";
import List from "./components/List";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
// import NavList from "./components/NavList";
import About from "./pages/About";
import Home from "./pages/Home";

import Products from "./pages/Products";




function App() {
 
  return (
    <div >
      <Navbar />
      <div className="container">
      <Routes>
        
        <Route path="/" element={<Home/>} /> 
        <Route path="about" element={<About/>} />

        <Route path="products" element={<Products/>}>

            <Route path="list"  >
                <Route index element={<List />} />
                <Route path=":id" element={<Deatils/>} />
            </Route>

            <Route path="add-product" element={<Add/>} />
            <Route path="search" element={<Search/>} />

        </Route>

      </Routes>
      </div>
    </div>
  );
}

export default App;




