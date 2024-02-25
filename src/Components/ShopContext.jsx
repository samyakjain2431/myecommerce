import React, { createContext, useState } from 'react'
import { Data } from './Data'

export const ShopContext = createContext()

const getDefaultCart = () =>{
  let cart = {};
  for (let i  = 0; i<Data.length; i++){
    cart[i] = 0;
  }
  return cart;
}


export default function ShopContextProvider( props) {
  const [cartItems, setCartItems] = useState(getDefaultCart());
   
  


  const totalCartItems = ()=>{
    let totalItems = 0;
    for(const item in cartItems){
      if(cartItems[item]>0){
        // let itemInfo = Data.find((product)=>product.id === Number(item));
        totalItems += cartItems[item];
      }
    }
    console.log("Total items in cart : ", totalItems)
    return totalItems;
  }
  const clearCart =()=>{
    if (window.confirm("Clear all items from cart?")) {
      for(const item in cartItems){
        if(cartItems[item]>0){
          setCartItems((prev)=>({...prev, [item] : 0}));
        }
      }
    }

  }
  const getTotalCartAmount = () =>{
    let totalAmount = 0;
    for(const item in cartItems){
      if(cartItems[item]>0){
        let itemInfo = Data.find((product)=>product.id === Number(item));
        totalAmount += cartItems[item]*itemInfo.price;
      }
    }
    return Number(totalAmount.toFixed(2));
  }
  const addToCart = (itemId) =>{
    // setItems((prev)=>{console.log(prev[itemId], 'prev')});
    setCartItems((prev)=>({...prev, [itemId] : prev[itemId]+1}));
    // console.log(cartItems)
  }
  const delFromCart = (itemId) =>{
    setCartItems((prev)=>({...prev, [itemId] : 0}));
    // console.log(items)
  }
  const reduceFromCart = (itemId) =>{
    setCartItems((prev)=>({...prev, [itemId] : prev[itemId]-1}));
    // console.log(items)
  }
  

  const contextValue = {cartItems, reduceFromCart, clearCart, delFromCart, addToCart, getTotalCartAmount, totalCartItems}
  // console.log(cartItems)
  return (
    <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
  )
}
