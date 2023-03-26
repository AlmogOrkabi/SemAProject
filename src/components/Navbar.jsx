import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
    <nav className='navbar' aria-label='main navigation'>
        <Link className='link nav-link' to='/' >דף הבית</Link>
        <Link className='link nav-link' to='/login'>התחברות</Link>
        <Link className='link nav-link' to='register'>הרשמה</Link>
    </nav>
    </>
  )
}
