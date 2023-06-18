import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function ProductList(props) {
    const [cart, setCart] = useState({value: 0, text :'Add to cart'});
    // const id = 5;
    const navigate = useNavigate()
    const goToProdDesc = () =>{
        let dest = '/productdesc/'+props.data.id
        navigate(dest, {state : props.data})
    }
    // console.log(cart)
    const addToCart = () =>{
        if (cart.value === 0){
            setCart({value: 1, text :'Added'})
        }
        if(cart.value ===1){
            setCart({value: 0, text :'Add to cart'})
        }

    }
    
  return (
    <div className='flex w-[100%] border-2  mb-8   text-slate-800'>
        <img className='w-64 object-cover cursor-pointer' onClick={goToProdDesc} src="https://stylesatlife.com/wp-content/uploads/2019/12/latest-bed-designs-in-2020.jpg.webp" alt="" />
        
        <div className='w-[100%] p-3 px-6'>
            
            <h1  className='text-3xl mb-2 cursor-pointer' onClick={goToProdDesc}>{props.data.name}</h1>
        <div className="flex justify-between w-[100%] items-end">
            <div className="data">
                <p className='text-sm'>⭐{props.data.reviews}</p>
                <p className='text-2xl text-orange-500 my-2 font-semibold'>{props.data.price}</p>
                <p className='text-sm opacity-75'>{props.data.brand}</p>
                <p className='text-sm opacity-75'>{props.data.available === 1 ? 'In Stock':"Not Available"}</p>
                {/* <button onClick={goToProdDesc}>click me</button> */}
            </div>
            <button className={cart.value === 0 ? 'px-6 py-3 text-white bg-blue-700 font-semibold' : 'px-6 py-3 text-white bg-blue-500 font-semibold'} onClick={addToCart}>{cart.text}</button>
        </div>
            </div>

    </div>
  )
}
