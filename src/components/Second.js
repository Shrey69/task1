import React from 'react'
import Header from './Header'
import Footer1 from './Footer1'
import Footer2 from './Footer2'
import { Link } from 'react-router-dom'


const Second = () => {
  return (
    <div>
      <Header name = "Project type" desc="Dont't panic - You can also customize this types in settings" />
      
    <div className='flex py-6'>
      <button className='w-[33.33%] p-1 bg-blue-500 border-2 border-blue-500 rounded-l-lg  text-white'>Time & Materials</button>
      <button className='w-[33.33%] text-slate-500 p-1 border-y-2 border-gray-300'>Fixed Fee</button>
      <button className='w-[33.33%] text-slate-500 p-1 border-2  border-gray-300 rounded-r-lg'>Non-Billable</button>
    </div>

    {/**2 */}
    <div className='space-y-2 py-2'>
        <p className='text-slate-600 font-medium '>Hourly</p>
        <span className='text-sm text-slate-500'>We need hourly rates to track your project's billable amount</span>

        <div className='md:flex'>
        <select 
         className='w-[88%] md:w-[50%]
           text-slate-400
            focus:border-2 
             focus:border-blue-400 outline-none border border-gray-400  rounded-md pl-4 py-1'>
              <option defaultValue className='bg-slate-200 '>Project Hourly Rate</option>
              </select> 

             <p className='text-sm text-slate-400 pt-2 px-2'>.</p>

             <input type='text' placeholder='Rs.12,678.00'
         className='w-[88%] md:w-[30%]
           text-blue-400
            focus:border-2 
             focus:border-blue-400 outline-none border border-gray-400  rounded-md pl-4 py-1' />
             </div>
      </div>


      {/**3 */}
    <div className='space-y-2 py-2'>
        <p className='text-slate-600 font-medium '>Budget</p>
        <span className='text-sm text-slate-500'>We need hourly rates to track your project's billable amount</span>
        <select 
         className='w-[88%] md:w-[50%]
           text-slate-400
            focus:border-2 
             focus:border-blue-400 outline-none border border-gray-400  rounded-md pl-4 py-1'>
              <option defaultValue className='bg-slate-200 '>Hours per person</option>
              </select> 

      </div>

      {/**4 */}
    <div className='space-x-2 py-2'>
    <input type='checkbox' 
         className='' />
      
        <span className='text-sm text-gray-500'>Budget resets every month</span>
      </div>

      {/**5 */}
    <div className='space-x-2 py-2 pb-8'>
    <input type='checkbox' 
         className='' />
      
        <span className='text-sm text-gray-500'>Send email alerts if project exceeds 80.00% of your budget</span>
      </div>




      <div className='flex gap-28'>
     
      <Link to={"/"}><Footer1  /></Link>
      <Link to={"/3"}><Footer2 nxt="Next"/></Link>
      
    </div>
    </div>
  )
}

export default Second
