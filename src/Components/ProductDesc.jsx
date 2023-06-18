import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

export default function ProductDesc() {
  const [count, setCount] = useState(1)
  const decrement = () =>{
    if(count === 1){
      setCount(1)
    }
    else{
      setCount(count-1)
    }
  }
  const increment = () =>{
    if(count === 10){
      setCount(10)
    }
    else{
      setCount(count+1)
    }
  }
  const navigate = useNavigate()
  const goToCart = () =>{
    navigate('/cart', {state: data})
  }
  const location = useLocation()
  let data = location.state
  // console.log(location.state)
  return (
    <div className='flex flex-col  items-center'>
      <section className="hero py-5 mb-5 md:mb-auto md:py-12 bg-[#d5ac9e] opacity-75  w-full ">
      <div className="m-auto  max-w-[1200px] px-5 font-semibold text-[30px] tracking-wider "><Link className='text-[#663423] ' to='/'>Home</Link>/<Link className='text-[#663423] ' to='/products'>Products</Link>/{data.name}</div>
      </section>
    <div className='text-slate-800 w-[100%] max-w-[1200px] px-5 mb-20   '>
      <Link to='/products' className='flex w-40 my-20 mb-10 py-2 px-5 bg-[#ab644c] rounded-lg shadow-md text-white' >Back To Products</Link>
      <section className="flex gap-12 w-[100%]">
        <img src="https://www.course-api.com/images/store/product-12.jpeg" alt="" className="left h-[33rem] object-cover w-[50%] top-0" />
        <div className="data right w-[50%]">
          <h2 className='text-[40px] font-semibold'>{data.name}</h2>
          <p className='text-yellow-500 font-semibold mb-4'>⭐{data.reviews}</p>
          <p className='text-2xl font-bold text-orange-700 opacity-75'>{data.price}</p>
          <p className='leading-relaxed  opacity-75 my-5 text-justify'>{data.description}</p>
          <div className='flex'><p className='w-32 font-bold opacity-75'>Availability : </p><span className='opacity-75'>{data.available === 1 ? 'In Stock' : 'Not Available'}</span></div>
          <div className='flex my-4'><p className='w-32 font-bold opacity-75'>Brand : </p><span className='opacity-75'>{data.brand}</span></div>
          <div className='flex'><p className='w-32 font-bold opacity-75'>Shipping : </p><span className='opacity-75'>{data.freeShip === 1 ?'Free' : 'Chargable'}</span></div>
          <hr className='my-10' />
          <div className='text-3xl font-bold   inline flex'>
            <button onClick={decrement} className='border-2 py-2 w-10'>-</button><span className='border-2 py-2 px-3 border-x-0'>{count}</span><button onClick={increment} className='border-2 py-2 w-10'>+</button>
          </div>
          <button onClick={goToCart} className='block-inline my-5 py-2 px-5 bg-[#ab644c] rounded-lg shadow-md text-white' >Add to Cart</button>

        </div>
      </section>
    </div>
    </div>
  )
}
