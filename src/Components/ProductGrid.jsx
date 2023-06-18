import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ProductGrid(props) {
  // console.log('this is ', props.data.id)
  const navigate = useNavigate()
  const goToProdDesc = () =>{
    let dest = '/productdesc/'+props.data.id
    navigate(dest, {state : props.data})
}

  return (
    <div className='p-5 w-[100%] lg:w-[100%] '>
            <img className='rounded-md mb-4 h-52 w-[100%] object-cover cursor-pointer hover:scale-105 duration-200 ' onClick={goToProdDesc} src="https://stylesatlife.com/wp-content/uploads/2019/12/latest-bed-designs-in-2020.jpg.webp" alt="" />
            <span className='cursor-pointer' onClick={goToProdDesc}>{props.data.name? props.data.name: 'product 1'}</span>
            <span className='float-right text-orange-600'>{props.data.price? props.data.price: '$99.99'}</span>
    </div>
    
  )
}
