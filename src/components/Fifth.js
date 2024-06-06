import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'
import FifthP from './FifthP'
import Footer1 from './Footer1'
import Footer2 from './Footer2'


const Fifth = () => {
  return (
    <div>
      <Header name = "Tasks"/>
      {/**1 */}
      <div className='space-y-2 py-2 pb-8 '>
        <p className='text-slate-600 font-medium '>Add a task</p>

        <div className='flex space-x-2'>
        <input type='text' placeholder='Add task'
         className=' w-full
           text-blue-400
            focus:border-2 
             focus:border-blue-400 outline-none border border-gray-400  rounded-md pl-4 py-1' />
             <button className="px-4 py-2 bg-blue-500 text-white rounded-md">Add</button>
             </div>
        
       <div className="mt-8 h-64 overflow-y-auto  "> 
       
          <FifthP name="Marketing Website Design"/>
          <FifthP name="Branding Design"/>
          <FifthP name="UI/UX Fundamentals"/>
          <FifthP name="Wireframe and Prototyping"/>
          <FifthP name="Style Guide"/>
          <FifthP name="UX Research and Flows"/>
          <FifthP name="Layout Design"/>
          
      </div>
      </div>
      

      <div className='flex gap-28'>
     
      <Link to={"/4"}><Footer1  /></Link>
      <Link to={"/6"}><Footer2 nxt="Next"/></Link>
      
    </div>
    </div>
  )
}

export default Fifth
