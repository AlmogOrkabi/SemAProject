import React from 'react'
import { useRef,useEffect, useContext } from 'react'
import { UserContext } from '../contexts/UserContext.jsx';
import { useNavigate } from 'react-router-dom'
import {useForm} from 'react-hook-form';

export default function Login() {


const {users,Login,CheckUsernameValidity,CheckPasswordValidity,loggedUser,SetLoggedUser} = useContext(UserContext)

  const navigation = useNavigate();

  const {register,handleSubmit,formState:{errors},watch, trigger} = useForm({mode:"all"});

  useEffect(() => {
  
  },[]);




//   const CheckHebrewLetters = (ch) => {
//   return ch >= 'א'&& ch <= 'ת'
//   }

//   const  checkLetters = (ch) => {

//     return ch >= 'a' && ch <= 'z';
//   }

//   const checkCapitalLetters = (ch) => {

//     return ch >= 'A' && ch <= 'Z';
//   }

//   const checkNumbers = (ch) => {
//     return ch >= '0' && ch <= '9';
//   }

//   const checkSymbols = (ch) => {
//     //[!@#$%^&*+`~'=?\|\]\[\(\)\-<>/]
//     return ch == '!' || ch == '@' || ch == '$' || ch == '#' || ch == '%' || ch == '+' || ch == '-' || ch == '^' || ch == '&' || ch == '*' || ch == '`' || ch == '~' || ch == '=' || ch == '<' || ch == '>' || ch  == '/' || ch == '(\)' || ch == '_' || ch == '|' || ch == '.' || ch == "'";
//   }




//   function CheckUserNameInput(target){
//     for(let i = 0; i <target.value.length; i++){
//       if(checkLetters(target.value[i]) == false && checkCapitalLetters(target.value[i]) == false && checkNumbers(target.value[i]) == false && checkSymbols(target.value[i]) == false){
//         target.value = target.value.slice(0,i);
//         target.classList.add('border-red');
//       }
//       else{
//         target.classList.remove('border-red');
//       }

//   }

//   if(target.value.length <= 0 || target.value.length > 60){
//     //add an error message to the user for invalid input length
//     return false
//   }
//   else{
//     return true; //all chars not allowed have been deleted and the username length is valid
//   }
// }





// //deletes unapproved chars
// function CheckPasswordChars(target){
//     for(let i = 0; i <target.value.length; i++){
//     if(checkLetters(target.value[i]) == false && checkCapitalLetters(target.value[i]) == false && checkNumbers(target.value[i]) == false && checkSymbols(target.value[i]) == false){
//       target.value = target.value.slice(0,i);
//       target.classList.add('border-red');
//     }
//     else{
//       target.classList.remove('border-red');

//     } 
  
//   }
// }




  const UserLogin = (data) => {
  let user = Login(data.username,data.password);
  if (user != undefined){
    SetLoggedUser(user);

    if (user.username  == 'admin'){
      navigation(`/admin`) 
    }
    else{
    //delete before submitting
    alert(`Welcome Back ${user.username}`);
    navigation(`/profile/${user.username}`) }

    //idea for the admin vs normal user login:
    /*
    adding a boolean: Admin == true / false
    OR
    saving the admins in a different array and checking the admin's array first(it is supposed to be shorter than the normal users array)
    */

  }
  else{
    alert('User Not Found');
    //??add a popup or something to go to the register page??
  }
}
  

  
  return (
    <>
    <h1>Login Page</h1>
<div className="form-container">
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
      <p className='form-input-error'>{errors.password?.message}</p>
      </div>
        <button>התחבר/י</button>
    </form>
</div>

    <div>
      <h2>עדיין לא משתמש רשום?</h2>
      <button onClick={(e) =>navigation('/register')}>לחץ כאן להרשמה</button>
    </div>
    </>
  )
}
