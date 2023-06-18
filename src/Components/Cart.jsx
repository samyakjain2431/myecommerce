import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import CartItem from './CartItem';

export default function Cart() {
  let initCart ;
  if(localStorage.getItem('cartItem')===null){
    initCart = []
  }
  else{
    initCart = JSON.parse(localStorage.getItem('cartItem'))
  }
  const location = useLocation()
  let data = location.state
  const [cartItem, setCartItem] = useState(initCart);
  const addToCart = () =>{
    console.log('New cart == ', data);
    if(!(data in cartItem)){
      setCartItem([...cartItem, data])
    }
    
    
  }
  // console.log(data)
  
  // addToCart()
  useEffect(()=>{
    localStorage.setItem('cartItem', JSON.stringify(cartItem))
  }, [cartItem])
  console.log(cartItem)
  return (
    <div>
      <section className="hero py-5 mb-5 md:mb-20 md:py-12 bg-[#d5ac9e] opacity-75  w-full  ">
      <div className="m-auto  max-w-[1200px] px-5 font-semibold text-[30px] tracking-wider "><Link className='text-[#663423] ' to='/'>Home</Link> / Cart</div>
      </section>
      <div className='text-slate-800 w-[100%] max-w-[1200px] px-5 mb-20   '>
        <div className="grid grid-cols-5 opacity-75 text-center my-8">
          <p className='col-span-2'>Item</p>
          <p>Price</p>
          <p>Price</p>
          <p>Price</p>
        </div>
        <hr />
        <CartItem/>
        <CartItem/>
        <hr />
      </div>
    </div>
  )
}
