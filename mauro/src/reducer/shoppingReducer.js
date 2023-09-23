import { TYPES } from "@/actions/actions";
import { shoppinginitialState } from "./shoppingInitialState"; 


export function shoppingReducer(state, action) {
    switch (action.type) {
        case TYPES.ADD_TO_CART:
            
        case TYPES.REMOVE_ONE_PRODUCT:
           
        case TYPES.REMOVE_ALL_PRODUCT:
            
        case TYPES.CLEAR_CART:
           return shoppinginitialState

        default:
            return state
    }

}