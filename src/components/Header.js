import React from 'react'

const Header = ({name, desc}) => {
  return (
    <div className='text-center pb-2 '>
         <p className='text-2xl pt-8 font-semibold'>{name}</p>  
         <p className='text-sm text-slate-500 '>{desc}</p>  
    </div>
  )
}

export default Header
