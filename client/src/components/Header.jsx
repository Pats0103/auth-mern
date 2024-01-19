import React from 'react'
import { NavLink ,Link} from 'react-router-dom'

function Header() {
  return (
    <header className='p-4'>
      <nav className='flex justify-between items-center text-lg '>
        <div className='font-bold'>
          LOGO
        </div>
        <div className='flex gap-3 opacity-60'>

        <NavLink to="/login" className={""}>Log in</NavLink>
        <NavLink to="/register" className={""}>Register</NavLink>
        </div>
      </nav>
    </header>
  )
}

export default Header