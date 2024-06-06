import React from 'react'

const FifthP = ({name}) => {
  return (
   
      <div className="py-2 border-b border-gray-300 flex justify-between">
            <div className='space-x-4'>
                <input type='checkbox'/>
                <span className="font-medium text-gray-800">{name}</span>
            </div>
            
            <img src={(require("..//assests/x.png"))} alt='cross' className='cursor-pointer h-4 w-4 m-2'/>
          </div>
   
  )
}

export default FifthP
