import { ThemeContext } from "@/context/ThemeContextProvider"
import { useContext, useState } from "react"

const Footer = () => {

    const [theme] = useContext(ThemeContext)

    return (
        <>
            <div className={theme}>
                <h2>holafooter</h2>

                <style>{`
                    heigth: 100vh;
                    `}</style>
            </div>
        </>
    )
}

export default Footer