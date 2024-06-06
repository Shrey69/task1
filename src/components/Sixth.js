import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'
import FifthP from './FifthP'
import Footer1 from './Footer1'
import Footer2 from './Footer2'

const Sixth = () => {

  return (
    <div>
        <Header name = "Team" />
       
        <div className='space-y-2 py-2 pb-8 '>
        <p className='text-slate-600 font-medium '>Invite or Add a person</p>

        <div className='flex space-x-2'>
        
    
      <select className='w-full
          font-medium text-gray-800
             border border-gray-400  rounded-md pl-4 py-1 '>
        <option defaultValue className='bg-slate-200 '>Steve Mathew</option>
        <option value="1" className='bg-slate-200 p-4'>Robert Pattinson</option>
        <option value="2" className='bg-slate-200'>Steve Waugh</option>
      </select>

             <button className="px-4 py-2 bg-blue-500 text-white rounded-md">Add</button>
             </div>
        
       <div className="mt-8 h-64 overflow-y-auto  "> 
       
          <FifthP name="Steve Mathew"/>
          <FifthP name="Robert Pattinson"/>
          <FifthP name="Steve Waugh"/>
          <FifthP name="Fanny Russel"/>
          <FifthP name="Rodney Meyer"/>
          <FifthP name="Ellen Simmons"/>
          <FifthP name="Virgi Kim"/>
          <FifthP name="Emma Castro"/>
          
      </div>
      </div>

      <div className='flex gap-28'>
     
      <Link to={"/5"}><Footer1  /></Link>
      <Link to={"/6"}><Footer2 nxt="Create Project"/></Link>
      
    </div>
    </div>
  )
}

export default Sixth
