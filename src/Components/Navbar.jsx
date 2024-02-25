import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from './ShopContext'

export default function Navbar() {
  const{ totalCartItems} = useContext(ShopContext)
  let itemsInCart = totalCartItems();
  return (
    // <div className=' flex gap-10 '>
      <header className="text-gray-600 body-font shadow-md bg-white  w-screen top-0 " style={{zIndex: 5}}>
  <div className="container mx-auto flex p-5 flex-row  justify-between  items-center max-w-[1300px]">
    <Link to='/'  className="flex mt title-font font-medium items-center text-gray-900 md:mb-0">
      
      <span className="text-2xl big">Samyak Jain</span>
    </Link>
    <nav className="md:ml-auto md:mr-auto md:flex flex-wrap items-center gap-10 text-base hidden justify-center">
      {/* <a className="mr-5 hover:text-gray-900">Projects</a>
      <a className="mr-5 hover:text-gray-900">Pricing</a>
      <a className="mr-5 hover:text-gray-900">Reviews</a>
      <a className="mr-5 hover:text-gray-900">Faq</a> */}
      <Link to='/' >Home</Link>
      <Link to='/products' >Product</Link>
      <Link to='/cart' >Carts<span className='relative text-xs inline-block p-1 -top-1 w-5 text-center bg-pink-500 text-white rounded-full'>{itemsInCart}</span></Link>
    </nav>
    <Link to={'/cart'} className="inline-block rounded-lg  hover:opacity-100 bg-[#c14d4d]  active:scale-95 active:bg-600   hover:scale-105 duration-200 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition hover:bg-red-500 focus-visible:ring active:bg-red-700 ">
      Place Order
      
            </Link>
        </div>
        </header>
    // </div>
  )
}
