//const userdata = require('../APIresponse/userdata.json');
import {FETCH_USER,SAVE_ENTERED_DETAILS,USER_LOGIN_SUCCESS,FETCH_USER_DATA} from '../constants/actionTypes'
import {employeeData,loginData} from '../APIresponse/userdata'
/* const userdata={
    "username":"hruday@gmail.com",
    "password" :"hruday123"
   }
 */
//let admins = require('~/app/admins.json');
const fetchUserLoginData=()=>(dispatch)=>{
    console.log('[InActions]')
    dispatch({
        type:FETCH_USER,
        payload:{...loginData}
    })

}
const fetchUserData=()=>(dispatch)=>{
    console.log('[InActions] 1')
    dispatch({
        type:FETCH_USER_DATA,
        payload:{...employeeData}
    })

}


// const updateUserEnteredDetails=(userName,passWord)=>(dispatch)=>{
//     dispatch({
//         type:SAVE_ENTERED_DETAILS,
//         payload:{userName,passWord}
//     })

// }

const sccussLogin=()=>(dispatch)=>{
    console.log(employeeData);
    dispatch({
        type:USER_LOGIN_SUCCESS,
        payload:{...employeeData}
    })

}


export {
    fetchUserLoginData,
    sccussLogin,fetchUserData
}