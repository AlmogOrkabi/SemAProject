import React from 'react'
import { UserContext } from '../contexts/UserContext';
import { useContext } from 'react';
import User from '../components/User';


export default function Admin() {
  const {users} = useContext(UserContext);
  return (
    <>
      <h1>Admin Page</h1>
      {
        users.map((u) =>
        <User key = {u.username} user = {u}/>)
      }
      
    </>
  )
}
