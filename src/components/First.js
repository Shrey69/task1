import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'
import Footer1 from './Footer1'
import Footer2 from './Footer2'

const First = () => {
  return (
    <div>
      <Header name = "Create a Project"  />
      <div>
      {/**1 */}
      <div className='space-y-2 py-2'>
        <p className='text-slate-600 font-medium '>Project name</p>
        <input type='text' placeholder='Enter project name here'
         className=' w-full
           text-blue-400
            focus:border-2 
             focus:border-blue-400 outline-none border border-gray-400  rounded-md pl-4 py-1' />
      </div>

{/**2 */}
      <div className='space-y-2 py-2'>
        <p className='text-slate-600 font-medium '>Client</p>

        <div className='md:flex'>
        <select 
         className=' w-[80%] md:w-[70%]
           text-slate-400
            focus:border-2 
             focus:border-blue-400 outline-none border border-gray-400  rounded-md pl-4 py-1'>
              <option defaultValue className='bg-slate-200 '>Select a client</option>
              </select> 

             <p className='text-sm text-slate-400 pt-1 px-2'>or</p>

             <input type='text' placeholder='New client'
         className='w-[80%] md:w-[30%]
           text-blue-400
            focus:border-2 
             focus:border-blue-400 outline-none border border-gray-400  rounded-md pl-4 py-1' />
             </div>
      </div>


          {/**3 */}
      <div className='space-y-2 py-2'>
        <p className='text-slate-600 font-medium '>Dates</p>


        <div className='md:flex'>
        <input type='date' className='w-[80%] md:w-[50%] text-slate-400 border border-slate-400  rounded-md  py-1 pl-4' />

             <p className='text-sm text-slate-400 pt-1 px-2'>-</p>

             <input type='date' className=' w-[80%] md:w-[50%] text-slate-400 border border-slate-400  rounded-md  py-1 pl-4' />
             </div>
      </div>

      {/**4  */}
      <div className='space-y-2 py-2 pb-4'>
        <p className='text-slate-600 font-medium '>Notes</p>
        <input type='text' placeholder='Optional'
         className=' w-full h-28 pl-4
           text-blue-400
            focus:border-2 
             focus:border-blue-400 outline-none border border-gray-400  rounded-md  py-1' />
      </div>

      </div>
      <div className='flex gap-28'>
     
      <Link to={"/"}><Footer1  /></Link>
      <Link to={"/2"}><Footer2 nxt="Next"/></Link>
      
    </div>
    </div>
  )
}

export default First
