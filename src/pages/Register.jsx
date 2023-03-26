import React, {useContext,useState,useEffect,useRef} from 'react'
import { UserContext } from '../contexts/UserContext'
import { useParams,useNavigate } from 'react-router-dom';
import {useForm} from 'react-hook-form';
import {AiFillFileImage} from 'react-icons/ai'
import { Link } from 'react-router-dom';

export default function Register() {


    const {users,SetUsers,cities,SetCities,LoadCities,FindUserByEmail,Login,AddNewUser,DeleteUser,CheckHebrew,CheckSpecialChar,CheckUpperCase,CheckLowerCase,CheckNumber,CheckUsernameValidity,CheckPasswordValidity,CheckNameValidity,CheckEmailValidity,CalcAge,CheckUserAge,CheckCity,CheckStreet} = useContext(UserContext)
    const navigation = useNavigate();
    const {username} = useParams();
   // const [user,SetUser] = useState({});
    const {register,handleSubmit,formState:{errors},watch, trigger} = useForm({mode:"all"});

    useEffect(()=>{
        LoadCities();
    },[])


    const ValidateForm = (data) =>{

        console.log(data);

        CreateNewUser(data);

        navigation(`/login`)
    }

// does not work globally because of the "watch" method, the useRef hook didnt work as well.
function CheckPasswordsMatch(value){
  if(value != watch("password")){
    return "סיסמאות לא תואמות"
  }
  else{
    return true;
  }
}


    function CreateNewUser(data){
        let user ={
                username : data.username,
                password : data.password,
                image : URL.createObjectURL(data.image[0]),
                firstname : data.firstname,
                lastname : data.lastname,
                email : data.email,
                birthdate : data.birthdate,
                city : data.city,
                street : data.street,
                streetnumber : data.streetnumber
        };
        AddNewUser(user);
    }



return (
    <>

    <div className='form-container'>
<h1 className='title'>טופס הרשמה:</h1>
      <form action="" onSubmit={handleSubmit(ValidateForm)}>

      <div className="form-group">
        <label htmlFor="username">שם משתמש:</label>
      <input type="text" name="username" id="username" maxLength={60}  {...register("username",{required:"שדה חובה",
    validate:CheckUsernameValidity})}/> 
      {/* #####  added maxLenght to prevent the user from entering more than 60 chars ##### */}
      <p className='form-input-error'>{errors.username?.message}</p>
      </div>


      <div className="form-group">
        <label htmlFor="password">סיסמה:</label>
      <input type="password" name="password" id="password" maxLength={12} onKeyUp={() => trigger("repassword")} {...register("password",{required:"שדה חובה",
        validate:CheckPasswordValidity})}/>
      <p className='form-input-error'>{errors.password?.message}</p>
      </div>



      <div className="form-group">
        <label htmlFor="repassword">ווידוא סיסמה:</label>
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
        <label htmlFor="email">כתובת מייל:</label>
        <input type="text" name="email" id="email" {...register("email",{required:"שדה חובה",
        validate:{CheckEmailValidity,FindUserByEmail}
        })}/>
      <p className='form-input-error'>{errors.email?.message}</p>
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



      <button  className='form-btn'>הרשם</button>

    </form>
    <p>כבר רשום? <Link className='form-link link' to='/register'>התחבר</Link></p>
    </div>


    </>
)
}
