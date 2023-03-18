import React from 'react'
import { UserContext } from '../contexts/UserContext';
import { useContext, useEffect } from 'react';
import User from '../components/User';


export default function Admin() {
  const {users} = useContext(UserContext);

  useEffect(() => {
    console.log('admin page loaded');
  },[])

  return (
    <>
      <h1>Admin Page</h1>
      {
        // render all users except the admin: 
        users.map((u) => u.username != 'admin'?
        <User key = {u.username} user = {u}/> : null)
      }
      
    </>
  )
}
