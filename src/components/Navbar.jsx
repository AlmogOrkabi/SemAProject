import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
    <nav aria-label='main navigation'>
    <Link className='link' to='/' >Home</Link>
        <Link className='link' to='/login'>Login</Link>
        <Link className='link' to='register'>Register</Link>
        {/* ONLY FOR TESTING DELETE LATER!!! */}
        <Link className='link' to='admin'>Admin</Link>
    </nav>
    </>
  )
}
