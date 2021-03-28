import * as actions from './actiontypes';


export const signIn = (payload) => {
    return {type:actions.LOGIN_SUCCESS,payload:payload}
}

export const logout = (payload) => {
    return {type:actions.LOGOUT,payload:payload}
}

export const signUp = (payload) => {
    return {type:actions.SIGN_UP_SUCCESS,payload:payload}
}

export const signIn = (payload) => {
    return {type:actions.GET_PRODUCT_SUCCESS,payload:payload}
}