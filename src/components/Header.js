import React from 'react'
import Basket from './Basket'



const  Header = () => {
  return (
    <div className='bg-blue-400 flex'>
        <div className="flex justify-between items-center max-w-xs py-4">
            <img alt='logo' src="https://i.imgur.com/MHDAm7C.png" />
        </div>
        <Basket/>
    </div>

  )
}

export default Header