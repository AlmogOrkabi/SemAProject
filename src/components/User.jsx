import React from 'react'
import { UserContext } from '../contexts/UserContext';
import {ImBin} from "react-icons/im";
import {AiOutlineEdit} from 'react-icons/ai'
import { useContext } from 'react';

export default function User({user}) {

  

  return (
    // <>
    // <table className='user-table'>
    //   <thead>
    //     <tr className='thead-row'>
    //       <th>תמונה</th>
    //       <th >שם משתמש</th>
    //       <th>שם מלא</th>
    //       <th>תאריך לידה</th>
    //       <th>כתובת</th>
    //       <th>דואר אלקטרוני</th>
    //       <th>&nbsp;</th>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     <tr>
    //       <td style={{width: '10%'}}>
    //         <img src="https://thumbs.dreamstime.com/b/funny-face-baby-27701492.jpg" alt="" /></td>
    //       <td>
    //         AlmogOrkabi</td>
    //       <td>אלמוג עורקבי</td>
    //       <td>23/10/1996</td>
    //       <td>יצחק בן צבי 5 אזור</td>
    //       <td>orelii45@gmail.com</td>
    //       <td>
    //         <div className='admin-actions'>
    //           <button className='user-component-btn' title='edit'>
    //             <AiOutlineEdit/>
    //           </button>
    //           <button className='user-component-btn' title='delete' >
    //             <ImBin/>
    //           </button> 
    //         </div>
    //       </td>
    //     </tr>
    //   </tbody>
    // </table>
    // </>



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
              <button className='user-component-btn' title='edit'>
                <AiOutlineEdit/>
              </button>
              <button className='user-component-btn' title='delete' >
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
