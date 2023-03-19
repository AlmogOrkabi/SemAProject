import React from 'react'
import { UserContext } from '../contexts/UserContext';
import {ImBin} from "react-icons/im";
import {AiOutlineEdit} from 'react-icons/ai'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom'

export default function User({user}) {


  const {users,DeleteUser} = useContext(UserContext);
  const navigation = useNavigate();

  

  return (
        <>
    <table className='user-table'>
      <thead>
        <tr className='thead-row'>
          <th>תמונה</th>
          <th >שם משתמש</th>
          <th>שם מלא</th>
          <th>תאריך לידה</th>
          <th>כתובת</th>
          <th>דואר אלקטרוני</th>
          <th>&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{width: '10%'}}>
            <img src={user.image} alt="" /></td>
          <td>
            {user.username}</td>
          <td>{user.firstname} {user.lastname}</td>
          <td>{user.birthdate}</td>
          <td>{user.street} {user.streetNumber}, {user.city}</td>
          <td>{user.email}</td>
          <td>
            <div className='admin-actions'>
              <button className='user-component-btn user-edit-btn' title='edit' onClick={(e) => {navigation(`/edit/${user.username}`)}}>
                <AiOutlineEdit/>
              </button>
              <button className='user-component-btn user-delete-btn' title='delete' onClick={(e)=> DeleteUser(user.username)} >
                <ImBin/>
              </button> 
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    </>
  )
}
