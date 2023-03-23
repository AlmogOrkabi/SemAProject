import React from 'react'
import User from '../components/User.jsx'
import { Link } from 'react-router-dom'

export default function Home() {



  return (
    <>
    <h1 className='title'>ברוכים הבאים</h1>

    <div className='home-container'>
      <div className='home-choose-action-div'>
        <h2><Link  to='/login' className='link'>להתחברות</Link></h2>
      </div>
      <div className='home-choose-action-div'>
        <h2><Link  to='/register' className='link'>להרשמה</Link></h2>
      </div>
    </div>
    </>
  )
}
