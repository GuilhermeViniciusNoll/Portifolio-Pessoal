import { BrowserRouter, Routes } from "react-router-dom"

export const RouteComponent = ({ children }) => {
    return (
        <BrowserRouter>
            <Routes>
                {children}
            </Routes>
        </BrowserRouter >
    )
}