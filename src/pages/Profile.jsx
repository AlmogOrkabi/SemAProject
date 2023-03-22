import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import {AiOutlineEdit} from 'react-icons/ai';
import { UserContext } from '../contexts/UserContext'
import { useNavigate } from 'react-router-dom';
import {FaEnvelope,FaMapMarkerAlt,FaBirthdayCake} from 'react-icons/fa';



export default function Profile() {
    const { users, loggedUser } = useContext(UserContext);

    const [user, SetUser] = useState({});

    const navigation = useNavigate();

    useEffect(() => {
        console.log("Profile");
        SetUser(users.find((u) => u.username == username)?.username);
        console.log(user)

    }, [])

    const { username } = useParams();

    console.log(username);
    console.log(users)



    return (
        <>
            <h1 className='profile-title' id='pro-title'>Welcome Back {loggedUser.username}</h1>
            <div className='profile-container' id='box-pro1'>
            <img id='pro-img' src={loggedUser.image} alt="" />
            <div id='box-outline'>
            <p id='pro-name'>{loggedUser.firstname} {loggedUser.lastname}</p>
            <p><FaEnvelope/>{loggedUser.email}</p>
            <p><FaMapMarkerAlt/> {loggedUser.street} {loggedUser.streetNumber}, {loggedUser.city}</p>
            <p id='pro-birthday'>< FaBirthdayCake />{loggedUser.birthdate}</p>
            <button id='logoff' onClick={(e) =>navigation('/')}>Log Off</button> <button id='edit' onClick={(e) => navigation(`/edit/${loggedUser.username}`)}>Edit</button>
            <div id='buttons'></div>    
            </div>
        </div>
            

        </>
    )
}