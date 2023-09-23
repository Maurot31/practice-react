import { ThemeContext } from "@/context/ThemeContextProvider"
import { useContext } from "react"


const Header = () => {

    const [theme, handleTheme] = useContext(ThemeContext)

    return (
        <header className={theme}>
            <form>
                <fieldset>
                    <label htmlFor="light">light</label>
                    <input type="radio" name="same" id="light" value="light" onClick={handleTheme} />
                    <label htmlFor="dark">dark</label>
                    <input type="radio" name="same" id="dark" value="dark" on onClick={handleTheme} />
                </fieldset>
            </form>
        </header>
    )
}

export default Header