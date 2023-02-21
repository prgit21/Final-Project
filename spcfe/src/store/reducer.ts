import { LoginCreds } from "../loginPage/LoginTypes";
import { UserState } from "./storeTypes";

export const initialState:UserState = {
    login_status : false,
    admin: false,
}

type Action = { type: string,login_status: boolean,login_details: LoginCreds}

export const userReducer =  (state:UserState = initialState ,action : Action ) => {


    console.log(state)
}