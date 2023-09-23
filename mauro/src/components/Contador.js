
import React from 'react'
import { useState } from 'react'

const initialState = 0;


const Contador = () => {

    const [contador, setContador] = useState(initialState)

    const sumar = () => setContador(contador + 1);

    const restar = () => setContador(contador - 1);

    const resetear = () => setContador(initialState)


    return (
        <>
            <h1>{contador}</h1>
            <button onClick={sumar}> + </button>
            <button onClick={resetear}> Resetear </button>
            <button onClick={restar}> - </button>
        </>
    )
}

export default Contador




