import React from 'react'
import Header from './Header'
import Footer1 from './Footer1'
import Footer2 from './Footer2'
import { Link } from 'react-router-dom'



const Third = () => {
  return (
    <div>
      <Header name = "Select a view" desc="You can also customize this views in settings"/>


      <div className='md:space-x-6 space-y-8 md:space-y-0  py-6 pb-36 md:flex justify-between'>
        <div className=''>
          <button className='focus:border-2 
             focus:border-blue-400 outline-none border border-gray-400  py-6 px-14 rounded-md'>
         <img src={require("..//assests/listt.jpeg") } alt='list' className='' />
        </button>
        <p className='text-center'>List</p>
        </div>

        <div className=''>
          <button className='focus:border-2 
             focus:border-blue-400 outline-none border border-gray-400  py-6 px-14 rounded-md'>
         <img src={require("..//assests/listt.jpeg") } alt='list' className='' />
        </button>
        <p className='text-center'>Board</p>
        </div>
      </div>


      <div className='flex gap-28'>
     
      <Link to={"/2"}><Footer1  /></Link>
      <Link to={"/4"}><Footer2 nxt="Next"/></Link>
      
    </div>
    </div>
  )
}

export default Third
