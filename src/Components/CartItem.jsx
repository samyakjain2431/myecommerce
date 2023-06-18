import React from 'react'

export default function CartItem() {
  return (
    <div className='my-8 grid grid-cols-5 text-slate-800 text-center items-center px-4'>
        <div className=" col-span-2 gap-4 items-center flex">
            
            <img src="https://www.course-api.com/images/store/product-3.jpeg" className='rounded-lg h-20 object-cover w-[50%]' alt="" />
            <h2 className='font-semibold text-lg'>Name of Object</h2>
        </div>
        <p className='text-orange-500'>Price</p>
        <p>quantity</p>
        <div className='flex gap-4 items-center justify-end '>
            <p className="text-center">Subtotal</p>
        <button className='py-2 px-3 text-xs font-semibold rounded-lg text-white shadow-md bg-red-500'>DEL</button>
        </div>

    </div>
  )
}
