import {FETCH_USER,SAVE_ENTERED_DETAILS,USER_LOGIN_SUCCESS,FETCH_USER_DATA} from '../constants/actionTypes'
const initialState={
    userdata:{},
    EmployeeList:{},
    isFetching:false,
    success:false,
    error:false,
    username:'',
    password: ''
}

const reducer=(state=initialState,action)=>{
    console.log('[InReducer]')
    console.log(action.payload)
    switch(action.type){
        case FETCH_USER:
            return {...state,userdata:action.payload};
        case FETCH_USER_DATA:
                return {...state,EmployeeList:action.payload};
        case USER_LOGIN_SUCCESS:
            return {...state,success:true,EmployeeList:action.payload}
        default:
                return state;

    }
}

export default reducer;