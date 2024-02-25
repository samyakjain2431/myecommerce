import React from 'react'
import ProductGrid from './ProductGrid'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className='text-slate-800'>
        <section className="flex hero px-16 py-32 gap-10 ">
            <div className="left">
                <h1 className='text-4xl font-bold my-4'>Design Your Comfort Zone</h1>
                <p className='leading-relaxed opacity-50'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit non, consectetur pariatur iusto accusamus possimus qui nulla explicabo earum quaerat odit e</p>
                <Link to={'/products'} className=' mt-8 rounded-md py-2 px-4 bg-orange-900 opacity-75 text-white inline-block'>SHOP NOW</Link>
            </div>
            <div className="right image hidden md:block"><img className='rounded-lg shadow-lg' src="https://stylesatlife.com/wp-content/uploads/2019/12/latest-bed-designs-in-2020.jpg.webp" alt="" /></div>
        </section>
        <section className="featured px-8 py-20  bg-slate-100 flex flex-col items-center">
            <h2 className='text-3xl text-center font-bold  mb-10 '>Featured Products</h2>

        <div className="Featured grid md:grid-cols-3">
            <ProductGrid data = {{name:'product1', price: '$99.99'}}/>
            <ProductGrid data = {{name:'product1', price: '$99.99'}}/>
            <ProductGrid data = {{name:'product1', price: '$99.99'}}/>
            
        
        </div>
            <Link to='/products' className='py-3 px-6  bg-orange-800 text-white opacity-75 rounded-lg my-5 inline-block'>All Products</Link>
        </section>
        <section className="custom bg-orange-100 px-8 py-20">
            <h2 className='text-center font-bold text-3xl mb-2'>Custom Designs For You</h2>
            <p className='opacity-75 text-center mb-10'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde aliquid ipsam, quaerat ullam laudantium facere.</p>
            <div className="grid grid-cols-3">
                <div className="border-2 p-5 bg-orange-300 text-center m-5">
                    <h3 className='text-2xl mb-5 text-semibold'>Mission</h3>
                    <p className='opacity-75'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, esse?</p>
                </div>
                <div className="border-2 p-5 bg-orange-300 text-center m-5">
                    <h3 className='text-2xl mb-5 text-semibold'>Mission</h3>
                    <p className='opacity-75'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, esse?</p>
                </div>
                <div className="border-2 p-5 bg-orange-300 text-center m-5">
                    <h3 className='text-2xl mb-5 text-semibold'>Mission</h3>
                    <p className='opacity-75'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, esse?</p>
                </div>
            </div>
        </section>
        <section className='newsletter px-8 py-20'>
            <h2 className='font-bold  text-3xl mb-3 '>Join Our newsletter and get 20% off</h2>
            <p className='opacity-75 mb-10'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic odit autem error omnis accusamus reprehenderit?</p>
            <input type="text" className='p-2 w-[350px] border-2 border-black rounded-l-lg' />
            <span className='px-4 py-2 bg-orange-300 inline-block border-2 border-black rounded-r-lg border-l-0 '>Subscribe</span>
        </section>
    </div>
  )
}
