import React from 'react'
import { useRef,useEffect, useContext } from 'react'
import { UserContext } from '../contexts/UserContext.jsx';
import { useNavigate } from 'react-router-dom'
import {useForm} from 'react-hook-form';
import { Link } from 'react-router-dom';


export default function Login() {


const {users,Login,CheckUsernameValidity,CheckPasswordValidity,loggedUser,SetLoggedUser} = useContext(UserContext)

  const navigation = useNavigate();

  const {register,handleSubmit,formState:{errors},watch, trigger} = useForm({mode:"all"});

  useEffect(() => {
  
  },[]);



  const UserLogin = (data) => {
  let user = Login(data.username,data.password);
  if (user != undefined){
    SetLoggedUser(user);

    if (user.username  == 'admin'){
      navigation(`/admin`) 
    }
    else{
    navigation(`/profile/${user.username}`) }


  }
  else{
    alert('User Not Found');
  }
}
  

  
  return (
    <>

<div className="form-container">
      <h1 className='title'>התחברות</h1>
          <form onSubmit={handleSubmit(UserLogin)}>
      <div className="form-group">
        <label htmlFor="username">שם משתמש:</label>
      <input type="text" name="username" id="username" maxLength={60} {...register("username",{required:"שדה חובה",
      validate:CheckUsernameValidity})}/> 
      {/* #####  added maxLenght to prevent the user from entering more than 60 chars ##### */}
      <p className='form-input-error'>{errors.username?.message}</p>
      </div>


      <div className="form-group">
        <label htmlFor="password">סיסמה:</label>
      <input type="password" name="password" id="password" maxLength={12} onKeyUp={() => trigger("repassword")} {...register("password",{required:"שדה חובה"})}/>
      {/* removed the password validity check because of the admin password + the admin password was longer than 12 characters so we changed it to 'admin1234' */}
      <p className='form-input-error'>{errors.password?.message}</p>
      </div>
        <button className='form-btn'>התחבר/י</button>
    </form>
<p>עדיין לא משתמש רשום? <Link className='form-link link' to='/register'>הרשם עכשיו!</Link></p>
</div>
    </>
  )
}
