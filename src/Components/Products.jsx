import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ProductGrid from './ProductGrid'
import { Data } from './Data'
import ProductList from './ProductList'

// console.log(Data[3].category)
export default function Product() {
  const [currentData, setCurrentData] = useState(Data)
  const [Category, setCategory] = useState('all')
  const [Colors, setColors] = useState('all')
  const [view, setView] = useState('list')
  const [width, setWidth] = useState(window.innerWidth)



  const resetFilters =()=>{
    window.location.reload()
  }

  const changeToGrid = () =>{
    setView('grid')
  }
  const changeToList = () =>{
    setView('list')
  }



  useEffect(() => {
    const updateWindowDimensions = () => {
      setWidth(window.innerWidth)
    };
    window.addEventListener("resize", updateWindowDimensions);
    return () => window.removeEventListener("resize", updateWindowDimensions) 
  }, [width]);
  
  
  
  return (
    <div className='flex flex-col  items-center'>
      <section className="hero py-5 mb-5 md:mb-auto md:py-12 bg-[#d5ac9e]  w-full ">
        <div className={width<400? "m-auto  max-w-[1200px] px-5 font-semibold text-[20px] ":"m-auto  max-w-[1200px] px-5 font-semibold text-[40px] "}><Link className='text-[#663423] ' to='/'>Home</Link>/Products</div>
      </section>
    <div className='text-slate-800 w-[100%] max-w-[1200px] '>
      <section className={width<400? `block  mx-5`:`flex gap-10 items-start mx-5`}>
        <div className={width<400? 'left-bar ':'left-bar h-[90vh] sticky top-0 py-8'}>
          <input type="text" placeholder='Search' className='border-2  rounded-md px-2 py-1 mb-3'/>
          <h2 className='text-lg font-semibold '>Category</h2>
          <ul className='ml-3 mb-3'>
          <li className={Category === 'all'? 'cursor-pointer opacity-100 underline underline-offset-2' : 'cursor-pointer opacity-50'} onClick={()=>setCategory('all')}>All</li>
          <li className={Category === 'office'? 'cursor-pointer opacity-100 underline underline-offset-2' : 'cursor-pointer opacity-50'} onClick={()=>setCategory('office')}>Office</li>
          <li className={Category === 'living'? 'cursor-pointer opacity-100 underline underline-offset-2' : 'cursor-pointer opacity-50'} onClick={()=>setCategory('living')}>Living Room</li>
          <li className={Category === 'kitchen'? 'cursor-pointer opacity-100 underline underline-offset-2' : 'cursor-pointer opacity-50'} onClick={()=>setCategory('kitchen')}>Kitchen</li>
          <li className={Category === 'bedroom'? 'cursor-pointer opacity-100 underline underline-offset-2' : 'cursor-pointer opacity-50'} onClick={()=>setCategory('bedroom')}>Bedroom</li>
          <li className={Category === 'dining'? 'cursor-pointer opacity-100 underline underline-offset-2' : 'cursor-pointer opacity-50'} onClick={()=>setCategory('dining')}>Dining</li>
          <li className={Category === 'kids'? 'cursor-pointer opacity-100 underline underline-offset-2' : 'cursor-pointer opacity-50'} onClick={()=>setCategory('kids')}>Kids</li>
          </ul>
          <h2 className='text-lg font-semibold'>Company</h2>
          <select name="company" id="company" className='ml-3 mb-3 w-20'>
            <option value="all">all</option>
            <option value="all">all</option>
            <option value="all">all</option>
            <option value="all">all</option>
            <option value="all">all</option>
          </select>
          <h2 className='text-lg font-semibold'>Colors</h2>
          <ul className='mb-3 ml-3'>
          <li className={Colors === 'all'? 'cursor-pointer text-black underline pl-1 font-semibold ' : 'cursor-pointer text-black opacity-50'} onClick={()=>setColors('all')}>All</li>
          <li className={Colors === 'red'? 'cursor-pointer underline text-red-500 w-[50%] pl-1 font-semibold' : 'cursor-pointer text-red-600 opacity-50'} onClick={()=>setColors('red')}>Red</li>
          <li className={Colors === 'green'? 'cursor-pointer underline text-green-500 w-[50%] pl-1 font-semibold ' : 'cursor-pointer text-green-600 opacity-50'} onClick={()=>setColors('green')}>Green</li>
          <li className={Colors === 'yellow'? 'cursor-pointer underline text-yellow-500 w-[50%] pl-1  font-semibold ' : 'cursor-pointer text-yellow-600 opacity-50'} onClick={()=>setColors('yellow')}>Yellow</li>
          <li className={Colors === 'blue'? 'cursor-pointer underline text-blue-500 w-[50%] pl-1  font-semibold ' : 'cursor-pointer text-blue-600 opacity-50'} onClick={()=>setColors('blue')}>Blue</li>
          <li className={Colors === 'black'? 'cursor-pointer underline text-black w-[50%] pl-1  font-semibold ' : 'cursor-pointer text-black-600 opacity-50'} onClick={()=>setColors('black')}>Black</li>
          
          
          </ul>
          <h2 className='text-lg font-semibold'>Price</h2>
          <progress id='price' value={32} max={100}></progress>
          <p>free Shipping  <input type="checkbox"  /></p>
          <button onClick={resetFilters} className='block-inline py-1 px-3 my-6 bg-red-500 text-white rounded-lg'>Reset Filters</button>
        </div>

        <div className="right w-[100%]" >
          <div className="sorting sticky top-0  bg-white py-8">
            <button className={view === 'grid'? 'px-4 py-2 border-2 border-slate-700 underline text-sm  mr-4':'px-4 py-2 border-2 text-sm opacity-75 mr-4'} onClick={changeToGrid}>Grid</button>
            <button className={view === 'list'? 'px-4 py-2 border-2 border-slate-700 underline text-sm  mr-4':'px-4 py-2 border-2 text-sm opacity-75 mr-4'}  onClick={changeToList}>List</button>
            <span className='float-center bg-white z-2 '> Items found : {currentData.length}</span>
            <select name="sorting" id="sorting" className='float-right border-2 rounded-md px-2 py-1'>
              <option value="Highest To Lowest">A to Z</option>
              <option value="Highest To Lowest">Z to A</option>
              <option value="Highest To Lowest">Highest to Lowest</option>
              <option value="Highest To Lowest">Lowest to Highest</option>
            </select>
          </div>
          {
            view ==='grid'? (<div className={width>1100? `product-listing grid grid-cols-3 `: width>750?`product-listing grid grid-cols-2 ` : `product-listing grid grid-cols-1 `}>
            {currentData.map((elem)=>{
              // console.log(elem)
              return (
                <ProductGrid key={elem.id} data={elem}  />
              )
            })
          }
          </div>): (<div className='mr-5'>
            {
              currentData.map((elem)=>{
                return(
                  <ProductList key={elem.id} data={elem}/>
                )
              })
            }
          </div>)
          }
          
        </div>
      </section>
    </div>
    </div>

  )
}
