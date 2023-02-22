import {nanoid} from 'nanoid';
import { LoginCreds } from '../loginPage/Login';

export interface UserState {
    login_status: boolean;
    admin: boolean;
}

export const initialState:UserState = {
    login_status : false,
    admin: false,
}

export interface ImageTypes {
    source: string;
    id: string;
    label: string;
}

type Action = { type: string,login_status: boolean,login_details: LoginCreds,image_details: ImageTypes,label: string}

export const userReducer =  (state:UserState = initialState ,action : Action ) => {
    console.log(state)
    switch(action.type){
        case "ENABLE_LOGIN" : {
            const {username,password}=action.login_details;
            if (username==='user' && password===''){
                state.login_status=true;
                return {...state}
            }
            if (username==='admin' && password===''){
                state.login_status=true
                state.admin=true
                return {...state}
            }
            return {...state}
        }
        case "ENABLE_LOGOUT" : {
            state.login_status=false
            return {...state}
        }
       
        default : return {...state}
    }
}