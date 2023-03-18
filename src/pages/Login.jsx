import React from 'react'
import { useRef,useEffect, useContext } from 'react'
import { UserContext } from '../contexts/UserContext.jsx';
import { useNavigate } from 'react-router-dom'

export default function Login() {


  const {users,Login,CheckPasswordChars,CheckUserNameInput} = useContext(UserContext);

  const navigation = useNavigate();


  useEffect(() => {
  
  },[]);

  const usernameRef = useRef();
  const passwordRef = useRef();



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




  const UserLogin = (event) => {
  event.preventDefault(); 
  let user = Login(usernameRef.current.value,passwordRef.current.value);
  if (user != undefined){

    if (user.username  == 'admin'){
      navigation(`/admin/${user.username}`) 
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
        <form onSubmit={UserLogin}>
        <label htmlFor='user-login'>שם משתמש:</label>
        <input type="text" id='user-login' ref={usernameRef} required   maxLength={60}  onKeyUp={(event) => CheckUserNameInput(event.target)} />
        

        <label htmlFor='user-password'>סיסמה:</label>
        <input ref={passwordRef} type="password" id='user-password' title='בין 7 ל 12 תווים, לפחות אות גדולה אחת, תו מיוחד ומספר' minLength={7} maxLength={12} onKeyUp={(e) => CheckPasswordChars(e.target)} required />
        <button>התחבר/י</button>
    </form>

    <div>
      <h2>עדיין לא משתמש רשום?</h2>
      <button onClick={(e) =>navigation('/register')}>לחץ כאן להרשמה</button>
    </div>
    </>
  )
}
