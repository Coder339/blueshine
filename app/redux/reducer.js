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
                userData:'',
                message:''
            }
        case actions.GET_PRODUCT_SUCCESS:
            return{
                ...state,
                case:action.type,
                products:action.payload
            }
        // case actions.GET_PRODUCTS_FAILURE:
        //     return {
        //         ...state,
        //         case: action.type,
        //         products: action.payload,

        //     }
        case actions.SIGN_UP_SUCCESS:
            return{
                ...state,
                case:action.type,
                userData:action.payload
            }
        // case actions.SIGN_UP_FAILURE:
        //     return{
        //         ...state,
        //         case:action.type,
        //         userData:action.payload
        //     }
        default:
            return {
                ...state,
                case: action.type,
                message: action.message,

            }
    }
}