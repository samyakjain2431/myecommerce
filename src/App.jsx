// import { useEffect} from "react";
import About from "./Components/About";
// import Contact from "./Components/Contact";
import Products from "./Components/Products";
// import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { useState } from "react";
import ProductDesc from "./Components/ProductDesc";
import Cart from "./Components/Cart";
import ShopContextProvider from "./Components/ShopContext";

function App() {

  const myArray = [
    {
    name : 'samyak', 
    price : 12,
  },
    {
    name : 'shachi', 
    price : 21,
  },
    {
    name : 'madhu', 
    price : 11,
  },
    {
    name : 'rahul', 
    price : 10,
  },
]
const changeSorting = (newSort)=>{
  if(newSort === 'relevance'){
    myArray.sort((a, b)=>a.id-b.id
    )
    console.log('changing to relevance');
  }
  if(newSort === 'alphabetical'){
    myArray.sort((a, b)=>
      a.name.localeCompare(b.name)
      )
      console.log('alphabetical', myArray);
  }
  if(newSort === 'reverseAlpha'){
    myArray.sort((a, b)=>
      b.name.localeCompare(a.name)
      )
      console.log('reverseAlpha', myArray);
  }
  if(newSort === 'incPrice'){
    myArray.sort((a, b)=> a.price-b.price)
    console.log('incPrice', myArray);
  }
  if(newSort === 'decPrice'){
    myArray.sort((a, b)=>b.price-a.price)
      console.log('decPrice', myArray);
  }
  
}

  
  return (
    <BrowserRouter>
    <ShopContextProvider>

    <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>}/>

    {/* <Route path="/contact" element={<Contact/>}/> */}
    <Route path="/products" element={<Products/>}/>
    <Route path="/products/:id" element={<ProductDesc/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/cart" element={<Cart/>}/>

    </Routes>
    {/* <Footer/> */}
    {/* <input type="text" /> */}
    

    {
      myArray.map((elem)=>{
        return(

          <div className="bg-red-100 text-center">
          <span>{elem.name} - </span>
          <span>{elem.price}</span>
        </div>
          )
      })
    }
    
    <select name="sorting2" id="sorting2" onChange={(e)=>changeSorting(e.target.value)}  className='float-right border-2 rounded-md px-2 py-1'>
              <option value="relevance" >Relevance</option>
              <option value="alphabetical" >A to Z</option>
              <option value="reverseAlpha" >Z to A</option>
              <option value="decPrice" >Highest to Lowest</option>
              <option value="incPrice" >Lowest to Highest</option>
            </select>
    </ShopContextProvider>
    </BrowserRouter>
  );
}

export default App;
//Note: what has happened so far?
//1. list view me bahar se hi add to cart(0-15) wala included kr diya, full delete bhi
//2. product description me counter ki jgh actual add to cart and reduce to cart implemented h.
//3. ab cart me jaana h, usme bhi context se map krne h,
//4. fr total products sum bhi nikalna hai