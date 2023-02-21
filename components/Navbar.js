import React from 'react'
import Link from 'next/link';

const Navbar = () => {
  return (
    <div>
      <nav className='bg-slate-900 p-2'>
        <ul className='flex items-center justify-center m-4'>
          <Link href="/"><li className='mx-3 text-2xl font-bold hover:text-blue-500 transition-all ease-in-out'>Home</li></Link>
          <Link href="/about"><li className='mx-3 text-2xl font-bold hover:text-blue-500 transition-all ease-in-out'>About</li></Link>
          <Link href="/blogs"><li className='mx-3 text-2xl font-bold hover:text-blue-500 transition-all ease-in-out'>Blogs</li></Link>
          <Link href="/contact"><li className='mx-3 text-2xl font-bold hover:text-blue-500 transition-all ease-in-out'>Contact</li></Link>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
