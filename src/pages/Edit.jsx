import React from 'react'
import { useContext,useState,useEffect,useRef } from 'react'
import { UserContext } from '../contexts/UserContext'
import { useParams,useNavigate } from 'react-router-dom';

export default function Edit() {
const {FindUser,AddNewUser,CheckUserNameInput,CalcAge,CheckPasswordChars,CheckPasswordValidity,CheckRePassword,CheckUserAge,CheckCity,CheckNameChars,CheckEmailChars,CheckEmailValidity,CheckInputLanguage,CheckStreetNumber,LoadCities,cities,users} = useContext(UserContext)

const navigation = useNavigate();
  const {username} = useParams();
  const [user,SetUser] = useState({});


const [image,SetImage] = useState([]);

const usernameRef = useRef();
const passwordRef = useRef();
const rePasswordRef = useRef();
const imageRef = useRef();
const firstnameRef = useRef();
const lastnameRef = useRef();
const emailRef = useRef();
const bdateRef = useRef();
const cityRef = useRef();
const streetRef = useRef();
const streetNumrRef = useRef();

  function CheckFormOnSubmition(e){
    console.log("CheckFormOnSubmition")
    e.preventDefault();
    if(CheckUserNameInput(usernameRef.current) && CheckPasswordValidity(passwordRef.current,rePasswordRef.current) && CheckRePassword(rePasswordRef.current,passwordRef.current) && CheckNameChars(firstnameRef.current) && CheckNameChars(lastnameRef.current) && CheckEmailValidity(emailRef.current) && CheckUserAge(bdateRef.current)&&CheckCity(cityRef.current) &&CheckInputLanguage(streetRef.current) && CheckStreetNumber(streetNumrRef.current)){
      console.log("valid form")
      //SAVE CHANGES FUNCTION
    }
    //### add an eles which shows what is wrong with the form inputs to the user!!! ###
  }

  useEffect(()=>{
    SetUser(users.find((u) => u.username === username));
    LoadCities();
  },[])

  return (
    <>
    <h1>עריכת פרופיל: {user.username}</h1>

  {/*  <form action="" onSubmit={(e) => CheckFormOnSubmition(e)} className='form register-form flex-column'>

        <label htmlFor="register-username">שם משתמש:</label>
        <input type="text" id='register-username' name='password' ref={usernameRef} required   maxLength={60}  onKeyUp={(event) => CheckUserNameInput(event.target)} />



        <label htmlFor="register-password">סיסמה:</label>

        <input type="password" name="password" id="register-password" ref={passwordRef} title='בין 7 ל 12 תווים, לפחות אות גדולה אחת, תו מיוחד ומספר' minLength={7} maxLength={12} onKeyUp={(e) => CheckPasswordChars(e.target)}   onBlur={(e) => CheckPasswordValidity(e.target,rePasswordRef.current)} required />

        <label htmlFor="register-password-confirmation">אימות סיסמה:</label>
        <input type="password" name="password" id="register-password-confirmation" ref={rePasswordRef} title='בין 7 ל 12 תווים, לפחות אות גדולה אחת, תו מיוחד ומספר' minLength={7} maxLength={12} onKeyUp={(e) => CheckPasswordChars(e.target)} onBlur = {(e) => CheckRePassword(e.target,passwordRef.current)} required />


        <label htmlFor="register-image">תמונה:</label>
        <input type="file" name="user-image" id="register-image" accept='image/jpeg, image/jpg' ref={imageRef} onChange={(e) => SetImage(URL.createObjectURL(e.target.files[0]))} required />


        <label htmlFor="first-name">שם פרטי:</label>
        <input type="text" name="first-name" id="first-name" ref={firstnameRef} onKeyUp={(e) => CheckNameChars(e.target)} required />

        <label htmlFor="last-name">שם משפחה:</label>
        <input type="text" name="last-name" id="last-name" ref={lastnameRef} onKeyUp={(e) => CheckNameChars(e.target)} required />



        <label htmlFor="register-email">כתובת דוא"ל:</label>
        <input type="email" name="user_email" id="register-email" ref={emailRef} pattern='.+@[a-z]+\.com'  onKeyUp={(e) => CheckEmailChars(e.target)} onBlur={(e) => CheckEmailValidity(e.target)} required />

        <label htmlFor="register-birth-date">תאריך לידה:</label>
        <input type="date" name="birth-date" id="register-birth-date" ref={bdateRef} min="1923-01-01" max="2023-01-01"  onBlur={(e) => CalcAge(e.target)} required />


        <label htmlFor="register-city">עיר מגורים:</label>
        <input type="text" name="city" id="register-city" ref={cityRef} list='city-list' required/>
        <datalist id='city-list'>
          {
            cities.map((city) => <option key = {city.שם_ישוב} value={city.שם_ישוב}></option>)
          }
        </datalist>

          <label htmlFor="register-street">רחוב:</label>
          <input type="text" name="user-street" id="register-street" ref={streetRef}  onKeyUp={(event) => CheckInputLanguage(event.target)} required />

          <label htmlFor="register-street-number">מספר בית:</label>
          <input type="number" id="register-street-number" name="user-street-number" ref={streetNumrRef} min={1} onChange={(e) => CheckStreetNumber(e.target)} required/>

        <button type='sumbit'>שמור שינויים</button>

        </form> */}


    </>
  )
}
