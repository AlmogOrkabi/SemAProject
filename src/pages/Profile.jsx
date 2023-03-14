import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'



export default function Profile() {
    const {users} = useContext(UserContext);


    useEffect(() => {
        console.log("Profile");
        
    },[])

    const {username} = useParams();

    console.log(username);
    console.log(users)



return (
<>
<h1>Welcome Back {users.find((u) => u.username == username).username}</h1>
</>  
)
}
