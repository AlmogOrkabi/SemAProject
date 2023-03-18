import React from 'react'
import {RiDeleteBin5Line} from "react-icons/ri";

export default function User() {
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
          <td style={{width: '15%'}}>
            <img src="https://thumbs.dreamstime.com/b/funny-face-baby-27701492.jpg" alt="" /></td>
          <td>
            AlmogOrkabi</td>
          <td>אלמוג עורקבי</td>
          <td>23/10/1996</td>
          <td>יצחק בן צבי 5 אזור</td>
          <td>orelii45@gmail.com</td>
          <td><div className='admin-actions'></div></td>
        </tr>
      </tbody>
    </table>
    </>
  )
}
