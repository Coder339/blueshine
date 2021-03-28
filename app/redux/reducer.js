import * as actions from './actiontypes';


export const reducer=(state=[],action)=>{
    switch(action.type){
        case actions.LOGIN_SUCCESS:
            return{
                ...state,
                case:action.type,
                userData:action.payload
            }
        case actions.LOGOUT:
            return{
                ...state,
                case:action.type,
                userData:''
            }
        case actions.GET_PRODUCT_SUCCESS:
            return{
                ...state,
                case:action.type,
                products:action.payload
            }
        case actions.SIGN_UP_SUCCESS:
            return{
                ...state,
                case:action.type,
                userData:action.payload
            }
        case actions.SIGN_UP_FAILURE:
            return{
                ...state,
                case:action.type,
                userData:action.payload
            }
        default: return state
    }
}