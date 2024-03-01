import { createContext, useContext, useState } from "react"

export const ThemeContext = createContext({})

export const ThemeProviderCustom = ({ children }) => {

    const [themeName, setTheme] = useState("light")
    const [statusMenu, setStatusMenu] = useState(false)
    const listTheme = {
        light: {
            main: "#f8f1d7",
            second: "#3f2502",
            white: "white",
            alternative: "#c5a583",
            shadow: "box-shadow: 3px 1px 7px 0px rgba(180, 131, 102, 0.98), 13px 5px 13px 0px rgba(180, 131, 102, 0.85), 28px 11px 18px 0px rgba(180, 131, 102, 0.50), 50px 20px 21px 0px rgba(180, 131, 102, 0.15), 78px 31px 23px 0px rgba(180, 131, 102, 0.02);",
        },
        dark: { background: "blue", main: "white" }
    }

    return (
        <ThemeContext.Provider value={{ listTheme, themeName, statusMenu, setStatusMenu }}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useThemeContext() {
    return useContext(ThemeContext)
}