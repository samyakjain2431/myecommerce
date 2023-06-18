// import { useEffect} from "react";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Products from "./Components/Products";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { useState } from "react";
import ProductDesc from "./Components/ProductDesc";
import Cart from "./Components/Cart";

function App() {
  
  return (
    <BrowserRouter>
    
    <Navbar/>
    {/* <button onClick={''}>hi</button> */}
    <Routes>
    <Route path="/" element={<Home/>}/>

    <Route path="/contact" element={<Contact/>}/>
    <Route path="/products" element={<Products/>}/>
    <Route path="/productdesc/:id" element={<ProductDesc/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/cart" element={<Cart/>}/>

    </Routes>
    <Footer/>
    {/* <input type="text" /> */}
    </BrowserRouter>
  );
}

export default App;
