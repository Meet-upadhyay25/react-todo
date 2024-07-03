import React from 'react'
import todoLogo from "../assets/todo.png"

const Header = () => {
  return (
    <header className='flex items-center justify-center'>
        <img src={todoLogo} alt='logo'/>
        <span className='font-bold text-2xl'>TaskManager</span>
    </header>
  )
}

export default Header