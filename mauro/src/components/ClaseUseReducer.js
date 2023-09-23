import { useReducer } from "react"
import { TYPES } from "@/actions/actions"
import { reducer } from "@/reducer/reducer"
import { initialState } from "@/reducer/initialState"



const ContadorUseReducer = () => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const sumar = () => dispatch({ type: "INCREMENTAR", payload: 10 });

    const restar = () => dispatch({ type: "DECREMENTAR", payload: 10 });

    const resetear = () => dispatch({ type: "RESETEAR" });

    const ocultar = () => dispatch({ type: "OCULTAR" })

    return (
        <>
            <h1>{state.contador}</h1>
            <button onClick={sumar}> + </button>
            <button onClick={resetear}> Resetear </button>
            <button onClick={restar}> - </button>
            <button onClick={ocultar}> Ocultar </button>
        </>
    )
}

export default ContadorUseReducer