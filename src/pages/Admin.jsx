import React from 'react'
import { UserContext } from '../contexts/UserContext';
import { useContext, useEffect, } from 'react';
import User from '../components/User';
import { useNavigate } from 'react-router-dom'


export default function Admin() {
  const {users,loggedUser,SetUsers,DeleteUser} = useContext(UserContext);
  const navigation = useNavigate();

  useEffect(() => {
    //if the user logged in is NOT the admin (or no user is currently logged in), kicks them to the login page
    if(loggedUser.username != 'admin'){
      alert('UNAUTHORIZED ACCESS');
      navigation('/login')
    }
    console.log('admin page loaded');
  },[])


  return (
    <>
      <h1 className='title'>דף ניהול</h1>
      {
        // render all users except the admin: 
        users.map((u) => u.username != 'admin'?
        <User key = {u.username} user = {u}/> : null)
      }
      
    </>
  )
}
