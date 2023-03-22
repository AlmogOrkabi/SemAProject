import React from 'react'
import { useContext,useState,useEffect,useRef } from 'react'
import { UserContext } from '../contexts/UserContext'
import { useParams,useNavigate } from 'react-router-dom';
import {useForm} from 'react-hook-form';
import {AiFillFileImage} from 'react-icons/ai'



export default function Edit() {
    const {users,SetUsers,cities,SetCities,LoadCities,FindUserByEmail,Login,AddNewUser,DeleteUser,CheckHebrew,CheckSpecialChar,CheckUpperCase,CheckLowerCase,CheckNumber,CheckUsernameValidity,CheckPasswordValidity,CheckNameValidity,CheckEmailValidity,CalcAge,CheckUserAge,CheckCity,CheckStreet} = useContext(UserContext)

const navigation = useNavigate();
  const {username} = useParams();
  const [user,SetUser] = useState({});


const [image,SetImage] = useState([]);


  useEffect(()=>{
    SetUser(users.find((u) => u.username === username));
    LoadCities();
  },[])


const {register,handleSubmit,formState:{errors},watch, trigger} = useForm({mode:"all"});





  const ValidateForm = (data) =>{

    console.log(data);

    UpdateUser(data);

    navigation(`/login`)
  }

// does not work globally because of the "watch" method
function CheckPasswordsMatch(value){
  if(value != watch("password")){
    return "סיסמאות לא תואמות"
  }
  else{
    return true;
  }
}


  function UpdateUser(data){


    user.username = data.username;
    user.password = data.password;
    user.image = URL.createObjectURL(data.image[0]);
    user.firstname = data.firstname;
    user.lastname = data.lastname;
    user.email = data.email;
    user.birthdate = data.birthdate;
    user.city = data.city;
    user.street = data.street;
    user.streetnumber = data.streetnumber;

    console.log(users)
    console.log(user)
  }

/*______________________________________________________*/



  return (
    <>
    <h1>עריכת פרופיל: {user.username}</h1>

    <div className='form-container'>

      <form action="" onSubmit={handleSubmit(ValidateForm)}>

      <div className="form-group">
        <label htmlFor="username">שם משתמש:</label>
      <input type="text" name="username" id="username" maxLength={60} {...register("username",{required:"שדה חובה",
    validate:CheckUsernameValidity})}/> 
      {/* #####  added maxLenght to prevent the user from entering more than 60 chars ##### */}
      <p className='form-input-error'>{errors.username?.message}</p>
      </div>


      <div className="form-group">
        <label htmlFor="password">סיסמה חדשה:</label>
      <input type="password" name="password" id="password" maxLength={12} onKeyUp={() => trigger("repassword")} {...register("password",{required:"שדה חובה",
        validate:CheckPasswordValidity})}/>
      <p className='form-input-error'>{errors.password?.message}</p>
      </div>



      <div className="form-group">
        <label htmlFor="repassword">ווידוא סיסמה חדשה:</label>
      <input type="password" name="repassword" id="repassword" maxLength={12} {...register("repassword",{required:"שדה חובה",
        validate:CheckPasswordsMatch})}/>
      <p className='form-input-error'>{errors.repassword?.message}</p>
      </div>


      <div className="form-group img-input">
        <label htmlFor="image"><AiFillFileImage className='img-icon'/> תמונה</label>
        <input type="file" name="image" id="image"  accept='image/jpeg, image/jpg' {...register("image",{
        required:"שדה חובה"
        })}/>
      <p className='form-input-error'>{errors.image?.message}</p>
      </div>




      <div className="form-group">
        <label htmlFor="first-name">שם פרטי:</label>
      <input type="text" name="first-name" id="first-name" {...register("firstname",
        {required:"שדה חובה",
        validate:CheckNameValidity})}/> 
      <p className='form-input-error'>{errors.firstname?.message}</p>
      </div>


      <div className="form-group">
        <label htmlFor="last-name">שם משפחה:</label>
      <input type="text" name="last-name" id="last-name" {...register("lastname",
        {required:"שדה חובה",
        validate:CheckNameValidity})}/> 
      <p className='form-input-error'>{errors.lastname?.message}</p>
      </div>



      <div className="form-group">
        <label htmlFor="new-email">כתובת מייל חדשה:</label>
        <input type="text" name="email" id="new-email" {...register("newemail",{required:"שדה חובה",
        validate:CheckEmailValidity
        })}/>
      <p className='form-input-error'>{errors.newemail?.message}</p>
      </div>



      <div className="form-group">
        <label htmlFor="birth-date">תאריך לידה:</label>
        <input type="date" name="birthdate" id="birth-date" min="1920-01-01" {...register("birthdate",
        {required:"שדה חובה",
        validate:CheckUserAge})}/> 
        <p className='form-input-error'>{errors.birthdate?.message}</p>
      </div>


      <div className="form-group"> 
        <label htmlFor="city">עיר מגורים:</label>
        <input type="text" name="city" id="city" list='city-list' {...register("city",
        {required:"שדה חובה",
        validate:CheckCity})}/>
        <datalist id='city-list' >
          {
            cities.map((city) => <option key = {city.שם_ישוב} value={city.שם_ישוב} ></option>)
          }
        </datalist>
        <p className='form-input-error'>{errors.city?.message}</p>
      </div>


      <div className="form-group">
        <label htmlFor="street">רחוב:</label>
      <input type="text" name="street" id="street" {...register("street",
        {required:"שדה חובה",
        validate:CheckStreet})}/> 
      <p className='form-input-error'>{errors.street?.message}</p>
      </div>


      <div className="form-group">
        <label htmlFor="street-number">מספר רחוב:</label>
      <input type="number" name="street-number" id="street-number" {...register("streetnumber",
        {required:"שדה חובה",
        pattern:{
          value: /^[0-9]*$/,
            message: "נא להזין מספר חיובי בלבד"
        },
        min:{
          value: 1,
          message: "נא להזין מספר  חיובי בלבד"

        }
        })}/> 
      <p className='form-input-error'>{errors.streetnumber?.message}</p>
      </div>



      <button>שמור שינויים</button>

    </form>
    </div>

  {/*  <form action="" onSubmit={(e) => CheckFormOnSubmition(e)} className='form register-form flex-column'>

        <label htmlFor="register-username">שם משתמש:</label>
        <input type="text" id='register-username' name='username' ref={usernameRef} required   maxLength={60}  onKeyUp={(event) => CheckUserNameInput(event.target)} />



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
