import * as types from './actionTypes';

const initialState = {
    loading : false,
    cart : [],
    user : null,
    error : null
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_TO_CART:
            let newCart = [...state.cart,action.payload]
            return {
                ...state,
                cart : newCart
            }
        case types.REMOVE_FROM_CART:
            let nCart = [...state.cart];
            const index  = state.cart.findIndex((item) => item.id === action.payload);
            if(index > 0 ) nCart.splice(index,1);
            return {
                ...state,
                cart : nCart
            }
        case types.REGISTER_START:
        case types.LOGIN_START:
        case types.LOGOUT_START:
            return{
                ...state,
                loading: true,
            };
        case types.REGISTER_SUCCESS:
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload
            };   
        case types.SET_USER:
            return {
                ...state,
                user: action.payload
            }   
        case types.EMPTY_CART:
            return{
                ...state,
                cart: []
            }    

        case types.REGISTER_FAIL:
        case types.LOGIN_FAIL:
        case types.LOGOUT_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            };      
        case types.LOGOUT_SUCCESS:
            return {
                ...state,
                user: null,
            }    

        default:
            return state;
    }
}

export default cartReducer;