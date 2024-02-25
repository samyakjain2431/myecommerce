import React, { useContext } from 'react'
import {  useNavigate } from 'react-router-dom';
import { ShopContext } from './ShopContext';

export default function ProductList(props) {
    const {addToCart, delFromCart, cartItems} = useContext(ShopContext)
    const navigate = useNavigate()
    const goToProdDesc = () =>{
        let dest = '/products/productdesc'+props.data.id
        navigate(dest, {state : props.data})
    }

  return (
    <div className='md:flex  w-[100%] border-2  mb-8   text-slate-800'>
        <div className='md:max-w-64 h-40 md:h-auto' >
        <img className='h-full w-full object-cover cursor-pointer' onClick={goToProdDesc} src="https://stylesatlife.com/wp-content/uploads/2019/12/latest-bed-designs-in-2020.jpg.webp" alt="" />
        {/* <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" /> */}
        

        </div>
        
        
        <div className='w-full p-3 px-6'>
            
            <h1  className='text-3xl mb-2 cursor-pointer' onClick={goToProdDesc}>{props.data.name}</h1>
        <div className="flex justify-between w-[100%] items-end">
            <div className="data">
                <p className='text-sm'>⭐{props.data.reviews}</p>
                <p className='text-2xl text-orange-500 my-2 font-semibold'>{props.data.price}</p>
                <p className='text-sm opacity-75'>{props.data.brand}</p>
                <p className='text-sm opacity-75'>{props.data.available === 1 ? 'In Stock':"Not Available"}</p>
                
                {/* <button onClick={goToProdDesc}>click me</button> */}
            </div>
            <div>

            <button className='p-3 bg-pink-500' onClick={()=>{addToCart(props.data.id)}}>Add {cartItems[props.data.id]===0?<span></span>: <span>{`(${cartItems[props.data.id]})`}</span>}</button>
            {cartItems[props.data.id] ===0 ?<button  className='p-2 ml-3 rounded-lg bg-slate-500 opacity-50' disabled>X</button>:
            <button className='p-2 ml-3 bg-red-500' onClick={()=>{delFromCart(props.data.id)}}>X</button>
            }
            </div>
        </div>
            </div>

    </div>
  )
}
