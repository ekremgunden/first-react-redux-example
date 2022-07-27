import React from 'react'
import { Link} from "react-router-dom";
import Basket from './Basket'



const  Header = () => {
  return (
    <div className='bg-blue-400 flex'>
        <div className="flex justify-between items-center max-w-xs py-4">
            <img alt='logo' src="https://i.imgur.com/MHDAm7C.png" />
        </div>
      <div className='flex underline'>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </div>
      
      <Basket/>
    </div>

  )
}

export default Header