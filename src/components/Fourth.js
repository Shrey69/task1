import React from 'react'
import Header from './Header'
import Footer1 from './Footer1'
import Footer2 from './Footer2'
import { Link } from 'react-router-dom'

const Fourth = () => {
  return (
    <div>
      <Header name="Who can manage projects" desc="Don't panic - You can also customize this permissions in settings"/>

      <div className='space-y-2 py-6 pb-28 md:px-6'>

        
        <div className='flex items-center cursor-pointer  border-2 border-gray-200 bg-slate-100  rounded-md py-1 hover:shadow-md'>
          <img src={require("..//assests/everyone.png")} className='h-9 w-10 m-2' alt=''/>
          <div className='ml-4'>
            <span className='text-sm text-gray-900 font-medium'>Everyone</span>
            <p className='text-gray-500 text-xs font-medium'>All users can now to see it, but guests cannot access the projects.</p>
          </div>
        </div>

       
        <div className='flex items-center  cursor-pointer  border-2 border-blue-500 bg-slate-100 py-1 rounded-md mt-4 hover:shadow-md'>
          <img src={require("..//assests/user2.png")} className='h-9 w-10 m-2' alt=''/>
          <div className='ml-4'>
            <span className='text-sm text-gray-900 font-medium'>Only Admin's</span>
            <p className='text-gray-500 text-xs font-medium'>Only admins can manage everything.</p>
          </div>
        </div>

        
        <div className='flex items-center cursor-pointer  border-2 border-gray-200 bg-slate-100 hover:shadow-md  rounded-md py-1 mt-4'>
          <img src={require("..//assests/2ppl.png")} className='h-9 w-10 m-2' alt=''/>
          <div className='ml-4'>
            <span className='text-sm text-gray-900 font-medium'>Only to Specific people</span>
            <p className='text-gray-500 text-xs font-medium'>Only some specific people can able to see it</p>
          </div>
        </div>

      </div>

      <div className='flex gap-28'>
     
      <Link to={"/3"}><Footer1  /></Link>
      <Link to={"/5"}><Footer2 nxt="Next"/></Link>
      
    </div>
    </div>
  )
}

export default Fourth
