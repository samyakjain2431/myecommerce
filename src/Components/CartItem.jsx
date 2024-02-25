import React, { useContext } from 'react'
import { ShopContext } from './ShopContext'

export default function CartItem(props) {
  const {cartItems, reduceFromCart, addToCart} = useContext(ShopContext)
  const getSubTotal = () =>{
    let subTotal = 0;
    subTotal = props.item.price * cartItems[props.item.id];
    return subTotal.toFixed(2);
  }

  return (
    <div className='my-4 px-2 py-4  bg-slate-100 rounded-lg shadow-md hover:shadow-lg duration-200 grid grid-cols-5 text-slate-800 text-center items-center '>
        <div className=" col-span-2 gap-4 items-center flex">
            
            <img src="https://www.course-api.com/images/store/product-3.jpeg" className='rounded-lg h-20 object-cover w-[50%]' alt="" />
            <h2 className='font-semibold text-lg'>{props.item.name}</h2>
        </div>
        <p className='text-orange-500'>${props.item.price}</p>
        <div className='  flex justify-center'>
            <button onClick={()=>{
              if (cartItems[props.item.id]>0) {
                reduceFromCart(props.item.id)
              }
            }} className='border-2 py-2 w-10'>-</button><span className='border-2 py-2 px-3 border-x-0'>{cartItems[props.item.id]}</span><button onClick={()=>{addToCart(props.item.id)}} className='border-2 py-2 w-10'>+</button>
          </div>
        <div className='flex gap-4 items-center justify-center '>
            <p className="text-center">${getSubTotal()}</p>
        {/* <button className='py-2 px-3 text-xs font-semibold rounded-lg text-white shadow-md bg-red-500' onClick={()=>{props.onDelete(props.props.item)}}>DEL</button> */}
        </div>

    </div>
  )
}
