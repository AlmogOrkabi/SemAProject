import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'



export default function Profile() {
    const {users} = useContext(UserContext);

    const [user,SetUser] = useState({});

    useEffect(() => {
        console.log("Profile");
        SetUser(users.find((u) => u.username == username).username);
        console.log(user)
        
    },[])

    const {username} = useParams();

    console.log(username);
    console.log(users)



return (
<>
<h1>Welcome Back {users.find((u) => u.username == username).username}</h1>
<h1>Welcome Back {user.username}</h1>
<img src={users.find((u) => u.username == username).image} alt="" />
</>  
)
}
