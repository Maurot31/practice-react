import { createContext, useState } from "react";

export const BooksContext = createContext()

const BooksContextProvider = (props) => {

    const [books, setBooks] = useState([
        {
            id: 1,
            libro: "Caperucita" 
        },
        {
            id: 2,
            libro: "Principito"
        },
        {
            id: 3,
            libro: "El libro gordo de petete"
        }
    ])

  return (
    <BooksContext.Provider value={books}>
        {props.children}
    </BooksContext.Provider>
  )
}

export default BooksContextProvider