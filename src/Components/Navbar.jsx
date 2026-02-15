import React from 'react'

const Navbar = () => {
  return (
   <nav className='fixed top-0 w-full bg-white shadow z-50'>
    <div className='max-w-6xl ms-auto px-6 py-4 flex justify-between items-center'>
        <h1 className='text-4xl font-bold'>Monitha vasu</h1>

        <ul className='hidden md:flex gap-6 text-gray-700'>
            <li><a href='#home' className='hover:text-blue-600'>Home</a></li>
            <li><a href='#about' className='hover:text-blue-600'>About</a></li>
            <li><a href='#skills' className='hover:text-blue-600'>Skills</a></li>
            <li><a href='#projects' className='hover:text-blue-600'>Projects</a></li>
            <li><a href='#contact' className='hover:text-blue-600'>Contact</a></li>
        </ul>
    </div>
   </nav>
  )
}

export default Navbar