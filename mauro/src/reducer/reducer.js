import { TYPES } from "@/actions/actions";
import { initialState } from "./initialState";


export function reducer(state, action) {
    switch (action.type) {
        case TYPES.INCREMENTAR:
            return { contador: state.contador + action.payload }
        case TYPES.DECREMENTAR:
            return { contador: state.contador - action.payload }
        case TYPES.RESETEAR:
            return initialState;
        case "MOSTRAR":
            return true
        case "OCULTAR":
            return false

        default:
            return state
    }

}