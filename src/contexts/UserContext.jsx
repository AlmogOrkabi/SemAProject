import {createContext,useState,useEffect } from "react";

export const UserContext = createContext();


// user:

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

    },[]);

    const [loggedUser, SetLoggedUser] = useState({}); // the user currently logged in 



const CheckHebrewLetters = (ch) => {
  return ch >= 'א'&& ch <= 'ת'
}

const  checkLetters = (ch) => {

  return ch >= 'a' && ch <= 'z';
}

const checkCapitalLetters = (ch) => {

  return ch >= 'A' && ch <= 'Z';
}

const checkNumbers = (ch) => {
  return ch >= '0' && ch <= '9';
}

const checkSymbols = (ch) => {
  //[!@#$%^&*+`~'=?\|\]\[\(\)\-<>/]


  return ch == '!' || ch == '@' || ch == '$' || ch == '#' || ch == '%' || ch == '+' || ch == '-' || ch == '^' || ch == '&' || ch == '*' || ch == '`' || ch == '~' || ch == '=' || ch == '<' || ch == '>' || ch  == '/' || ch == '(\)' || ch == '_' || ch == '|' || ch == '.' || ch == "'";
}


const CalcAge = (value) =>{

  let today = new Date(); // current date - recieved by the browser
  let userBday = new Date(value.value) // user input birth date
  let userAge = today.getFullYear() - userBday.getFullYear(); // rough calculation of age 
  let currentMonth = today.getMonth();
  let currentDay = today.getDate(); //gets the day of the month 

  if( today.getMonth() - userBday.getMonth() < 0 || today.getMonth() - userBday.getMonth() == 0 && today.getDate() < userBday.getDate()){
    userAge--;
  }
  console.log(userAge)

}

function CheckUserNameInput(target){
  for(let i = 0; i <target.value.length; i++){
    if(checkLetters(target.value[i]) == false && checkCapitalLetters(target.value[i]) == false && checkNumbers(target.value[i]) == false && checkSymbols(target.value[i]) == false){
      target.value = target.value.slice(0,i);
      target.classList.add('border-red');
    }
    else{
      target.classList.remove('border-red');
    }

  }

  if(target.value.length <= 0 || target.value.length > 60){
    //add an error message to the user for invalid input length
    return false
  }
  else{
    return true; //all chars not allowed have been deleted and the username length is valid
  }
}


//deletes unapproved chars
function CheckPasswordChars(target){
    for(let i = 0; i <target.value.length; i++){
    if(checkLetters(target.value[i]) == false && checkCapitalLetters(target.value[i]) == false && checkNumbers(target.value[i]) == false && checkSymbols(target.value[i]) == false){
      target.value = target.value.slice(0,i);
      target.classList.add('border-red');
    }
    else{
      target.classList.remove('border-red');

    } 
  
  }
}


//checks all password requirements
function CheckPasswordValidity(target,reTarget){

  CheckPasswordChars(target) // another check for password chars
  let isValidPassword;
  let number = false, capitalLetter= false, symbol = false;

  for(let i = 0; i < target.value.length; i++){
    if(checkCapitalLetters(target.value[i]) == true){
      capitalLetter = true;
    }
    else if(checkNumbers(target.value[i]) == true){
      number = true;
    }
    else if(checkSymbols(target.value[i]) == true){
      symbol = true;
    }
  }

  
  if(number == true && capitalLetter == true && symbol == true && target.value.length > 6 && target.value.length < 13){
    target.classList.add('border-green');
    target.classList.remove('border-red');
    isValidPassword = true;
  }
  else{
    target.classList.remove('border-green') // incase the user inserted a good password and then deleted chars (onKeyUp ignores backspace and delete keys)
    target.classList.add('border-red');
    isValidPassword = false;
  }
  
  if(reTarget.value != ''){
    CheckRePassword(reTarget,target) // visual check for the input border
  }

  return isValidPassword;

}

//checks if the passwords match:
function CheckRePassword(target,password){

  if(target.value == '') return false;

  if(target.value != password.value){
    console.log("passwords do not match");
    target.classList.add('border-red');
    target.classList.remove('border-green');
    return false;
  }
  else{
    console.log("passwords match");
    target.classList.add('border-green');
    target.classList.remove('border-red');
    return true;
  }
}

function CheckUserAge(target){
  console.log("check age")
  let age = CalcAge(target);
    if( age >= 120 || age <= 0 || age == NaN){
      return false;
    }
    else{
      return true;
    }
}


//checks if the city exists in the cities database (text input, the user can enter a fictional place)
function CheckCity(target){
  let city = target.value;
  console.log(city)

  for(let i = 0; i < cities.length; i++){
    if(cities[i].שם_ישוב == city){
      console.log("City FOUND")
      return true
    }
  }
  console.log("City NOT FOUND")
  //@#add a message to the user that the city does not exist#@
  return false;
}


//only letters (hebrew and english) **check only one language**
function CheckNameChars(target){
    for(let i = 0; i <target.value.length; i++){
    if(checkLetters(target.value[i]) == false && checkCapitalLetters(target.value[i]) == false && CheckHebrewLetters(target.value[i]) == false){
      target.value = target.value.slice(0,i);
      target.classList.add('border-red');
    }
    else{
      target.classList.remove('border-red');
    } 

    
  }
  return true; // after all unapproved characters are removed
}


//###DELETES EVERYTHING AFTER THE 2ND @###
// deletes extra @ chars and hebrew chars:
function CheckEmailChars(target){
  let atChar = false;
  for(let i = 0; i < target.value.length; i++){
    if(target.value[i] == '@' || CheckHebrewLetters(target.value[i])){
      if(target.value[i] == '@' && atChar == false){atChar = true;
      }
      //if hebrew or more than one @, deletes it
      else{
        target.value = target.value.slice(0,i);
      }
    }
  }
}

function CheckEmailValidity(target){
  CheckEmailChars(target); //making sure there's no extra @ 
  if(target.value.endsWith('.com')){
    target.classList.remove('border-red');
    return true;
  }
  else{
    target.classList.add('border-red');
    alert("כתובת המייל יכולה להסתיים רק ב: '.com'")
    // #add a designed warning to the user#
  }
}

// checks that the street name is in hebrew without deleting spaces
function CheckInputLanguage(target){
    for (let i = 0; i < target.value.length; i++) {
      if (target.value[i] < 'א' && target.value[i] != ' '|| target.value[i] > 'ת' && target.value[i] != ' '){
        target.value = target.value.slice(0,i);
        target.classList.add('border-red');
       // alert('רק אותיות בעברית')
      }
      else{
        target.classList.remove('border-red');
      }

      
  }

  return true; // after the invalid chars have been removed from the input
}

function CheckStreetNumber(target){
  for(let i = 0; i < target.value.length; i++) {
    if(checkNumbers(target.value[i]) == false){
        target.value = target.value.slice(0,i);
    }
  }
  if(target.value < 0 || target.value  == ''){
    target.classList.add('border-red');
    return false;
  }
  else{
    target.classList.remove('border-red');
    return true;
  }
}


  //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  //NO IMAGE CHECK OR SAVE~~!!!!!
  //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

//   function CheckFormOnSubmition(e){
//     console.log("CheckFormOnSubmition")
//     e.preventDefault();
//     if(CheckUserNameInput(usernameRef.current) && CheckPasswordValidity(passwordRef.current) && CheckRePassword(rePasswordRef.current) && CheckNameChars(firstnameRef.current) && CheckNameChars(lastnameRef.current) && CheckEmailValidity(emailRef.current) && CheckUserAge(bdateRef.current)&&CheckCity(cityRef.current) &&CheckInputLanguage(streetRef.current) && CheckStreetNumber(streetNumrRef.current)){
//       console.log("valid form")
//       RegisterNewUser();
//     }
//     //### add an eles which shows what is wrong with the form inputs to the user!!! ###
//   }

//     function RegisterNewUser(){
//         let newUser = {
//         "username": usernameRef.current.value,
//         "password": passwordRef.current.value,
//         //insert img here;
//         "firstname": firstnameRef.current.value,
//         "lastname": lastnameRef.current.value,
//         "email": emailRef.current.value,
//         "birthdate": bdateRef.current.value,
//         "city": cityRef.current.value,
//         "street": streetRef.current.value,
//         "streetNumber": streetNumrRef.current.value
//       }
//       console.log(newUser);
//       if(FindUser(newUser.email) == undefined){
//         console.log("New user added successfully")
//         AddNewUser(newUser);
//         navigation(`/login`)
//       }
//       else{
//         console.log("user already exists")
//         //## message to the user about the email ##!!!!
//       }
//   }

  const [cities,SetCities] = useState([]);

async function LoadCities(){
  try {
    let res = await fetch(`https://data.gov.il/api/3/action/datastore_search?resource_id=5c78e9fa-c2e2-4771-93ff-7f400a12f7ba&limit=1567`);
    // without limit will only get the first 100 cities (out of 1267)
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


    const FindUser = (email) => {
        let user = users.find((u) => u.email === email);
        console.log(user)
        return user;
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

    //const value = {users,AddNewUser,FindUser,Login};

    const value = {users,FindUser,Login,AddNewUser,CheckUserNameInput,CalcAge,CheckPasswordChars,CheckPasswordValidity,CheckRePassword,CheckUserAge,CheckCity,CheckNameChars,CheckEmailChars,CheckEmailValidity,CheckInputLanguage,CheckStreetNumber,LoadCities,cities,loggedUser};

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}
