import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ProductGrid from './ProductGrid'
import { Data } from './Data'
import ProductList from './ProductList'

export default function Product() {
  const myData = [...Data];
  myData.sort((a, b)=> a.price-b.price)

  const [category, setCategory] = useState('all')
  const [color, setColor] = useState('all')
  // const [first, setfirst] = useState(second)
  const [view, setView] = useState('list')
  const [width, setWidth] = useState(window.innerWidth)
  const array = [
    {
      iid : 3,
      name : 'samyak',
      price : 12,
    },
    {
      iid : 1,
      name : 'aamyak',
      price : 10,
    },
    {
      iid : 2,
      name : 'zamyak',
      price : 11,
    },

  ]
  const newArray = [...array].sort((name1, name2) =>name2.price.toString().localeCompare(name1.price.toString()))
  // console.log(newArray)



  const resetFilters =()=>{
    window.location.reload()
  }

  const changeToGrid = () =>{
    setView('grid')
  }
  const changeToList = () =>{
    setView('list')
  }
  const newElem =()=>{
    // console.log("i'm here")
    return(
      <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, eveniet illum accusamus ea quo ipsa? Incidunt illum id repellendus necessitatibus, ipsum vitae non iusto nostrum cum laudantium, sed ullam dolor cumque! Neque quis earum animi, at quaerat, minima ipsam dolorem numquam dicta molestiae reiciendis iste sunt consequatur, veniam inventore exercitationem?</p>
    )
  }

  const changeSorting = (newSort)=>{
    if(newSort === 'relevance'){
      myData.sort((a, b)=>a.id-b.id
      )
      console.log('changing to relevance');
    }
    if(newSort === 'alphabetical'){
      myData.sort((a, b)=>
        a.name.localeCompare(b.name)
        )
        console.log('alphabetical', myData);
    }
    if(newSort === 'reverseAlpha'){
      myData.sort((a, b)=>
        b.name.localeCompare(a.name)
        )
        console.log('reverseAlpha', myData);
    }
    if(newSort === 'incPrice'){
      myData.sort((a, b)=> a.price-b.price)
      console.log('incPrice', myData);
    }
    if(newSort === 'decPrice'){
      myData.sort((a, b)=>b.price-a.price)
        console.log('decPrice', myData);
    }
    
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
          <li className={category === 'all'? 'cursor-pointer opacity-100 underline underline-offset-2' : 'cursor-pointer opacity-50'} onClick={()=>setCategory('all')}>All</li>
          <li className={category === 'office'? 'cursor-pointer opacity-100 underline underline-offset-2' : 'cursor-pointer opacity-50'} onClick={()=>setCategory('office')}>Office</li>
          <li className={category === 'living'? 'cursor-pointer opacity-100 underline underline-offset-2' : 'cursor-pointer opacity-50'} onClick={()=>setCategory('living')}>Living Room</li>
          <li className={category === 'kitchen'? 'cursor-pointer opacity-100 underline underline-offset-2' : 'cursor-pointer opacity-50'} onClick={()=>setCategory('kitchen')}>Kitchen</li>
          <li className={category === 'bedroom'? 'cursor-pointer opacity-100 underline underline-offset-2' : 'cursor-pointer opacity-50'} onClick={()=>setCategory('bedroom')}>Bedroom</li>
          <li className={category === 'dining'? 'cursor-pointer opacity-100 underline underline-offset-2' : 'cursor-pointer opacity-50'} onClick={()=>setCategory('dining')}>Dining</li>
          <li className={category === 'kids'? 'cursor-pointer opacity-100 underline underline-offset-2' : 'cursor-pointer opacity-50'} onClick={()=>setCategory('kids')}>Kids</li>
          </ul>
          <h2 className='text-lg font-semibold'>Company</h2>
          <select name="company" id="company" className='ml-3 mb-3 w-20'>
            <option value="all">All</option>
            <option value="all">IKEA</option>
            <option value="all">Havells</option>
            <option value="all">Bajaj</option>
            <option value="all">Godrej</option>
          </select>
          <h2 className='text-lg font-semibold'>Colors</h2>
          <ul className='mb-3 ml-3'>
          <li className={color=== 'all'? 'cursor-pointer text-black underline pl-1 font-semibold ' : 'cursor-pointer text-black opacity-50'} onClick={()=>setColor('all')}>All</li>
          <li className={color=== 'red'? 'cursor-pointer underline text-red-500 w-[50%] pl-1 font-semibold' : 'cursor-pointer text-red-600 opacity-50'} onClick={()=>setColor('red')}>Red</li>
          <li className={color=== 'green'? 'cursor-pointer underline text-green-500 w-[50%] pl-1 font-semibold ' : 'cursor-pointer text-green-600 opacity-50'} onClick={()=>setColor('green')}>Green</li>
          <li className={color=== 'yellow'? 'cursor-pointer underline text-yellow-500 w-[50%] pl-1  font-semibold ' : 'cursor-pointer text-yellow-600 opacity-50'} onClick={()=>setColor('yellow')}>Yellow</li>
          <li className={color=== 'blue'? 'cursor-pointer underline text-blue-500 w-[50%] pl-1  font-semibold ' : 'cursor-pointer text-blue-600 opacity-50'} onClick={()=>setColor('blue')}>Blue</li>
          <li className={color=== 'black'? 'cursor-pointer underline text-black w-[50%] pl-1  font-semibold ' : 'cursor-pointer text-black-600 opacity-50'} onClick={()=>setColor('black')}>Black</li>
          
          
          </ul>
          <h2 className='text-lg font-semibold'>Price</h2>
          <progress id='price' value={32} max={100}></progress>
          <p>free Shipping  <input type="checkbox"  /></p>
          <button onClick={resetFilters} className='block-inline py-1 px-3 my-6 bg-red-500 text-white rounded-lg'>Reset Filters</button>
        </div>

        <div className="right w-[100%]" >
          <div className="sorting sticky flex justify-between items-center top-0  bg-white py-8 ">
            {/* <button className={view === 'grid'? 'px-4 py-2 border-2 border-slate-700 underline text-sm  mr-4':'px-4 py-2 border-2 text-sm opacity-75 mr-4'} onClick={changeToGrid}>Grid</button> */}
            <div className="view">
            <span className={view === 'grid'? 'material-symbols-outlined px-3 py-1 border-2 border-slate-700 mr-4':' material-symbols-outlined px-3 py-1  border-2  opacity-50 mr-4'} onClick={changeToGrid}>grid_view</span>
            <span className={view === 'list'? 'material-symbols-outlined px-3 py-1 border-2 border-slate-700 mr-4':' material-symbols-outlined px-3 py-1  border-2  opacity-50 mr-4'} onClick={changeToList}>view_list</span>

            </div>
            {/* <button className={view === 'list'? 'px-4 py-2 border-2 border-slate-700 underline text-sm  mr-4':'px-4 py-2 border-2 text-sm opacity-75 mr-4'}  onClick={changeToList}>List</button> */}
            <span className='float-center bg-white z-2 ' onClick={()=>changeSorting('incPrice')}> Items found : {Data.length}</span>
            <select name="sorting" id="sorting" onChange={(e)=>changeSorting(e.target.value)}  className='float-right border-2 rounded-md px-2 py-1'>
              <option value="relevance" >Relevance</option>
              <option value="alphabetical" >A to Z</option>
              <option value="reverseAlpha" >Z to A</option>
              <option value="decPrice" >Highest to Lowest</option>
              <option value="incPrice" >Lowest to Highest</option>
            </select>
          </div>
          {/* <Cart/> */}
          {
            view ==='grid'? (<div className={width>1100? `product-listing grid grid-cols-3 `: width>750?`product-listing grid grid-cols-2 ` : `product-listing grid grid-cols-1 `}>
            {category === 'all'? myData.map((elem)=>{
              return(
                <ProductGrid key ={elem.id} data = {elem}/>
              )
            })
            :
            myData.map((elem)=>{
              if(elem.category === category){
                return (
                  <ProductGrid key={elem.id} data={elem}  />
                )

              }
            })
          }
          </div>): (<div className='mr-5'>
            { category === 'all'? myData.map((elem)=>{
              newElem()
              return(
                <ProductList key={elem.id} data={elem}/>
                )
            })
            :
            myData.map((elem)=>{
              if(elem.category === category){
                return (
                  <ProductList key={elem.id} data={elem}/>
                  )

              }
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
