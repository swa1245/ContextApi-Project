import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <span className='text-3xl w-screen pl-[50%] mb-8 pb-8 '>Header context api</span>
      <ul className='flex space-x-4 justify-between pl-24 pr-24 mt-10  bg-yellow-300 h-20 text-center items-center'>
        <li className='hover:text-green-500'><Link className='' to='/'>Home</Link></li>
        <li className='hover:text-green-500'><Link to='/cart'>cart</Link></li>
      </ul>
    </div>
  )
}

export default Header
