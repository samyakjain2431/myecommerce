import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import CartItem from './CartItem';
import { ShopContext } from './ShopContext';
import { Data } from './Data';


export default function Cart() {
  const {cartItems, getTotalCartAmount, clearCart} = useContext(ShopContext)
  let totalCartAmount = getTotalCartAmount();
  totalCartAmount = Math.round(totalCartAmount*100)/100;
  return (
    <div className='flex flex-col items-center'>
      {/* <button onClick={addToCart}>click here</button> */}
      <section className="hero py-5 mb-5 md:mb-20 md:py-12 bg-[#d5ac9e] opacity-75  w-full  ">
      <div className="m-auto  max-w-[1200px] px-5 font-semibold text-[30px] tracking-wider "><Link className='text-[#663423] ' to='/'>Home</Link> / Cart</div>
      </section>
      <div className='text-slate-800 w-[100%] max-w-[1200px] px-5 mb-20   '>
        <div className="grid grid-cols-5 opacity-75 text-center my-8">
          <p className='col-span-2'>Item</p>
          <p>Item Price</p>
          <p>Quantity</p>
          <p>Total</p>
        </div>
        <hr />
        {Data && Data.map((item, key)=>{
          if(cartItems[item.id]!==0){
            console.log(cartItems[item.id])
            return(
              <CartItem key= {key} item={item}/>
            )
          }
        })}
        {/* { carts.length>0?
          carts.map((item)=>{
            count = count+1
            return(
              <>
              {console.log(count)}
              <CartItem key={item.id} data={item} count={location.state.count}  onDelete={onDelete} />
              </>
            )
            
          }):(<p className='my-5 opacity-75 text-center'>Nothing is here</p>)
        } */}
        <hr className='mb-5'/>
        <div className="flex justify-between">
          <Link to='/products' className='block-inline py-1 px-3 bg-orange-800 opacity-75 text-white rounded-md shadow-md'>Continue Shopping</Link>
          <button onClick={()=>clearCart()} className='block-inline hover:shadow-lg duration-200 py-2 px-4 bg-red-600  text-white rounded-md shadow-md'>Clear Cart</button>
        </div>
        <div className="flex flex-col items-center ">
          <div className="border-2 py-4 px-10 rounded-lg">
            {/* <div className="upper my-4 ">
              <div className='flex font-bold text-lg'><p className='w-44 text-lg block-inline font-bold text-lg'>Subtotal : </p><span>${totalCartAmount}</span></div>
              <div className='flex'><p className='w-44 block-inline'>Shipping Fee : </p><span>${12.99}</span></div>
            </div>
            <hr /> */}
            <div className="tota my-4 text-2xl font-bold l items-center flex">
              <p className=' w-44'>OrderTotal : </p>
              <span>${totalCartAmount}</span>
            </div>
          </div>
          <button  className="block-inline my-4 rounded-lg shadow-lg py-2 px-8 bg-orange-800 opacity-75 text-white text-2xl font-semi-bold ">ORDER NOW</button>
        </div>
      </div>
    </div>
  )
}
