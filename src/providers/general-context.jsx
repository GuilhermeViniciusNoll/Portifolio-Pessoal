import { createContext, useContext, useState } from "react"

export const GeneralContext = createContext({})

export const GeneralProvider = ({ children }) => {

    const [currentRender, setCurrentRender] = useState("frontend")
    const [modalContact, setModalContact] = useState(false)

    return (
        <GeneralContext.Provider value={{ currentRender, setCurrentRender, modalContact, setModalContact }}>
            {children}
        </GeneralContext.Provider>
    )
}

export function useGeneralContext() {
    return useContext(GeneralContext)
}