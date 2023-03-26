import {createContext,useState,useEffect } from "react";

export const UserContext = createContext();


// user template:

    //  {
    //      "id": "",
    //      "username" : "",
    //      "password" : "",
    //      "image" : "",
    //      "first_name" : "",
    //      "last_name" : "",
    //      "email" : "",
    //      "birthday" : "",
    //      "city" : "",
    //      "street" : "",
    //      "house_number" : "",
    //      "admin": ""

    //  }







export default function UserContextProvider({children}) {

    const [users,SetUsers] = useState([]);

    useEffect(() => {
      LoadUsers();
    },[]);

    const [loggedUser, SetLoggedUser] = useState({}); // the user currently logged in 



// const CheckHebrewLetters = (ch) => {
//   return ch >= 'א'&& ch <= 'ת'
// }

// const  checkLetters = (ch) => {

//   return ch >= 'a' && ch <= 'z';
// }

// const checkCapitalLetters = (ch) => {

//   return ch >= 'A' && ch <= 'Z';
// }

// const checkNumbers = (ch) => {
//   return ch >= '0' && ch <= '9';
// }

// const checkSymbols = (ch) => {
//   //[!@#$%^&*+`~'=?\|\]\[\(\)\-<>/]


//   return ch == '!' || ch == '@' || ch == '$' || ch == '#' || ch == '%' || ch == '+' || ch == '-' || ch == '^' || ch == '&' || ch == '*' || ch == '`' || ch == '~' || ch == '=' || ch == '<' || ch == '>' || ch  == '/' || ch == '(\)' || ch == '_' || ch == '|' || ch == '.' || ch == "'";
// }


// const CalcAge = (value) =>{

//   let today = new Date(); // current date - recieved by the browser
//   let userBday = new Date(value.value) // user input birth date
//   let userAge = today.getFullYear() - userBday.getFullYear(); // rough calculation of age 
//   let currentMonth = today.getMonth();
//   let currentDay = today.getDate(); //gets the day of the month 

//   if( today.getMonth() - userBday.getMonth() < 0 || today.getMonth() - userBday.getMonth() == 0 && today.getDate() < userBday.getDate()){
//     userAge--;
//   }
//   console.log(userAge)
//   return userAge;

// }

// function CheckUserNameInput(target){
//   for(let i = 0; i <target.value.length; i++){
//     if(checkLetters(target.value[i]) == false && checkCapitalLetters(target.value[i]) == false && checkNumbers(target.value[i]) == false && checkSymbols(target.value[i]) == false){
//       target.value = target.value.slice(0,i);
//       target.classList.add('border-red');
//     }
//     else{
//       target.classList.remove('border-red');
//     }

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


// //checks all password requirements
// function CheckPasswordValidity(target,reTarget){

//   CheckPasswordChars(target) // another check for password chars
//   let isValidPassword;
//   let number = false, capitalLetter= false, symbol = false;

//   for(let i = 0; i < target.value.length; i++){
//     if(checkCapitalLetters(target.value[i]) == true){
//       capitalLetter = true;
//     }
//     else if(checkNumbers(target.value[i]) == true){
//       number = true;
//     }
//     else if(checkSymbols(target.value[i]) == true){
//       symbol = true;
//     }
//   }

  
//   if(number == true && capitalLetter == true && symbol == true && target.value.length > 6 && target.value.length < 13){
//     target.classList.add('border-green');
//     target.classList.remove('border-red');
//     isValidPassword = true;
//   }
//   else{
//     target.classList.remove('border-green') // incase the user inserted a good password and then deleted chars (onKeyUp ignores backspace and delete keys)
//     target.classList.add('border-red');
//     isValidPassword = false;
//   }
  
//   if(reTarget.value != ''){
//     CheckRePassword(reTarget,target) // visual check for the input border
//   }

//   return isValidPassword;

// }

// //checks if the passwords match:
// function CheckRePassword(target,password){

//   if(target.value == '') return false;

//   if(target.value != password.value){
//     console.log("passwords do not match");
//     target.classList.add('border-red');
//     target.classList.remove('border-green');
//     return false;
//   }
//   else{
//     console.log("passwords match");
//     target.classList.add('border-green');
//     target.classList.remove('border-red');
//     return true;
//   }
// }

// function CheckUserAge(target){
//   console.log("check age")
//   let age = CalcAge(target);
//     if( age >= 120 || age <= 0 || age == NaN){
//       return false;
//     }
//     else{
//       return true;
//     }
// }


// //checks if the city exists in the cities database (text input, the user can enter a fictional place)
// function CheckCity(target){
//   let city = target.value;
//   console.log(city)

//   for(let i = 0; i < cities.length; i++){
//     if(cities[i].שם_ישוב == city){
//       console.log("City FOUND")
//       return true
//     }
//   }
//   console.log("City NOT FOUND")
//   //@#add a message to the user that the city does not exist#@
//   return false;
// }


// //only letters (hebrew and english) **check only one language**
// function CheckNameChars(target){
//     for(let i = 0; i <target.value.length; i++){
//     if(checkLetters(target.value[i]) == false && checkCapitalLetters(target.value[i]) == false && CheckHebrewLetters(target.value[i]) == false && target.value[i] != ' '){
//       target.value = target.value.slice(0,i);
//       target.classList.add('border-red');
//     }
//     else{
//       target.classList.remove('border-red');
//     } 

    
//   }
//   return true; // after all unapproved characters are removed
// }


// //###DELETES EVERYTHING AFTER THE 2ND @###
// // deletes extra @ chars and hebrew chars:
// function CheckEmailChars(target){
//   let atChar = false;
//   for(let i = 0; i < target.value.length; i++){
//     if(target.value[i] == '@' || CheckHebrewLetters(target.value[i])){
//       if(target.value[i] == '@' && atChar == false){atChar = true;
//       }
//       //if hebrew or more than one @, deletes it
//       else{
//         target.value = target.value.slice(0,i);
//       }
//     }
//   }
// }

// function CheckEmailValidity(target){
//   CheckEmailChars(target); //making sure there's no extra @ 
//   if(target.value.endsWith('.com')){
//     target.classList.remove('border-red');
//     return true;
//   }
//   else{
//     target.classList.add('border-red');
//     alert("כתובת המייל יכולה להסתיים רק ב: '.com'")
//     // #add a designed warning to the user#
//   }
// }

// // checks that the street name is in hebrew without deleting spaces
// function CheckInputLanguage(target){
//     for (let i = 0; i < target.value.length; i++) {
//       if (target.value[i] < 'א' && target.value[i] != ' '|| target.value[i] > 'ת' && target.value[i] != ' '){
//         target.value = target.value.slice(0,i);
//         target.classList.add('border-red');
//        // alert('רק אותיות בעברית')
//       }
//       else{
//         target.classList.remove('border-red');
//       }

      
//   }

//   return true; // after the invalid chars have been removed from the input
// }

// function CheckStreetNumber(target){
//   for(let i = 0; i < target.value.length; i++) {
//     if(checkNumbers(target.value[i]) == false){
//         target.value = target.value.slice(0,i);
//     }
//   }
//   if(target.value < 0 || target.value  == ''){
//     target.classList.add('border-red');
//     return false;
//   }
//   else{
//     target.classList.remove('border-red');
//     return true;
//   }
// }



const [cities,SetCities] = useState([]);

async function LoadCities(){
  try {
    let res = await fetch(`https://data.gov.il/api/3/action/datastore_search?resource_id=5c78e9fa-c2e2-4771-93ff-7f400a12f7ba&limit=1567`);
    // without limit will only get the first 100 cities (out of 1267), gave extra space for another 200 cities(number of actual cities unlikely to surpass that amount)
    let data = await res.json();
    console.log(data)
    data = data.result.records
    console.log(data)
    SetCities(data)
    console.log(cities)
  } catch (error) {
    console.error(error);
  }

}







//NEW FORM FUNCTIONS______@#$$%^&*:

const CheckHebrew = (value) =>{
  return /[א-ת]/.test(value);
}


//checks special characters
const CheckSpecialChar = (value) =>{
  //  \p{L} ---> any unicode letter in any language
  //  \p{N} ---> any unicode digit
  //  +/u --> flags the end of the regular expression and indicates it's to be treated as a unicode regular expression
  
  return /[^\p{L}\p{N}\s]+/u.test(value);
}

const CheckUpperCase = (value) =>{
  return /[A-Z]/.test(value)
}

const CheckLowerCase = (value) =>{
  return /[a-z]/.test(value);
}

const CheckNumber = (value) =>{
  return /[0-9]/.test(value);
}


function CheckUsernameValidity(value){
  if(CheckHebrew(value)) {
    return "אותיות לועזיות בלבד";
  }
  if(value.length > 60){
    return "עד 60 תווים בלבד"
  }
}


function CheckPasswordValidity(value){
  if(CheckHebrew(value)){
    return "אותיות לועזיות מספרים ותווים מיוחדים בלבד"
  }
  else if(value.length < 7){
    return"7 תווים לפחות"
  }
  else if(CheckSpecialChar(value) == false ||CheckUpperCase(value) == false|| CheckNumber(value) == false){
    return "חובה לפחות אות גדולה אחת תו מיוחד ומספר"
  }

  else if(value.length > 12 ){
      return "עד 12 תווים בלבד"
  }
}

// does not work globally because of the "watch" method,useRef hook does not work as well, moved a copy to the register and edit pages:
// function CheckPasswordsMatch(value,password){
//   if(value != password){
//     return "סיסמאות לא תואמות"
//   }
//   else{
//     return true;
//   }
// }

function CheckNameValidity(value){
  const space = /[`\s`]/;
  if(CheckSpecialChar(value)|| CheckNumber(value)){
    return "אותיות בלבד"
  }
  else{
    return true;
  }
}

  function CheckEmailValidity(value){
    if(CheckHebrew(value)) {
      return "כתובת מייל חייבת לכלול רק אותיות באנגלית";
    }
    else if( value.split('@').length - 1 != 1){
      return "תו @ אחד בלבד";

    }
    else if(value.endsWith('.com') == false){
      return "סיומת .com בלבד";
    }
    else{
    
      return true; //checks the email address does not already exists in the database
    } 
}


const CalcAge = (value) =>{

  let today = new Date(); // current date - recieved by the browser
  let userBday = new Date(value) // user input birth date
  let userAge = today.getFullYear() - userBday.getFullYear(); // rough calculation of age 
  let currentMonth = today.getMonth();
  let currentDay = today.getDate(); //gets the day of the month 


  //more precise calculation of the age taking into account the current month and day.
  if( today.getMonth() - userBday.getMonth() < 0 || today.getMonth() - userBday.getMonth() == 0 && today.getDate() < userBday.getDate()){
    userAge--;
  }
  console.log(userAge)
  return userAge;
}

function CheckUserAge(value){
  console.log("check age")
  let age = CalcAge(value);
    if( age >= 120 || age <= 0 || age == NaN){
      console.log("age not valid")
      return "תאריך לא תקין";
    }
    else{
      return true;
    }
}


function CheckCity(value){
  //let city = value.value;
  console.log(value)

  for(let i = 0; i < cities.length; i++){
    if(cities[i].שם_ישוב == value){
      console.log("City FOUND")
      return true
    }
  }
  return "נא לבחור עיר מתוך הרשימה"
}



function CheckStreet(value){
  if(CheckNumber(value)|| CheckUpperCase(value) || CheckLowerCase(value) || CheckSpecialChar(value))
  {
    return "רק אותיות בעברית"
  }
  else if(value.trim().length == 0){
    return 'שדה חובה'
  }
  else{
    return true;
  }
}












    //____________________________________________________



    const LoadUsers = async () => {
        try {
            let res = await fetch("../public/data/users.json");
            let data = await res.json();
            console.log(data);
            SetUsers(data);

        } catch (error) {
            console.log(error);
        }
    }


    const FindUserByEmail = (email) => {
        let user = users.find((u) => u.email === email);
        console.log(user)
        if (user!= undefined) {
          return 'כתובת מייל כבר קיימת'
        }
        else{
          return true;
        }
    }

    const Login = (username, password) => {
        let user = users.find((u) => u.username == username && u.password == password)
        console.log(user)
        SetLoggedUser(user);
        return user;
    }

    const AddNewUser = (nu) => {
        //let newUser = JSON.stringify(nu);
        console.log(nu);
        SetUsers((prev) =>[...prev,nu]);
        console.log(users);
    }

    const DeleteUser = (key) => {
      SetUsers(users.filter((u) => u.username != key));

    }


    //const value = {users,AddNewUser,FindUser,Login};

    // const value = {users,FindUser,Login,AddNewUser,CheckUserNameInput,CalcAge,CheckPasswordChars,CheckPasswordValidity,CheckRePassword,CheckUserAge,CheckCity,CheckNameChars,CheckEmailChars,CheckEmailValidity,CheckInputLanguage,CheckStreetNumber,LoadCities,cities,loggedUser,DeleteUser};

    const value = {users,SetUsers,cities,SetCities,LoadCities,FindUserByEmail,Login,AddNewUser,DeleteUser,CheckHebrew,CheckSpecialChar,CheckUpperCase,CheckLowerCase,CheckNumber,CheckUsernameValidity,CheckPasswordValidity,CheckNameValidity,CheckEmailValidity,CalcAge,CheckUserAge,CheckCity,CheckStreet,loggedUser,SetLoggedUser}

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}
