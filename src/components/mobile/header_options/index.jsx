import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useGeneralContext } from "../../../providers/general-context"
import style from "./style.module.css"

export const Header_options__mobile = () => {

    const { currentRender, setCurrentRender } = useGeneralContext()
    const navigate = useNavigate()
    const [statusMenu, setStatusMenu] = useState(false)
    const locals = ["Projetos BackEnd", "Projetos FrontEnd", "Sobre Mim", "Portfólio"]

    const switchHeaderOptions = (current) => {
        const list = locals.filter((element) => element != current)
        return (
            <>
                {list.map((element) =>
                    <p onClick={() => { setCurrentRender(element); navigate(`/${element}`) }} className={style.header_menu__option}>{element}</p>)
                }
            </ >)
    }

    const renderComponent = () => {
        switch (currentRender) {
            case "Projetos BackEnd":
                return switchHeaderOptions("Projetos BackEnd")
            case "Projetos FrontEnd":
                return switchHeaderOptions("Projetos FrontEnd")
            case "Sobre Mim":
                return switchHeaderOptions("Sobre Mim")
            case "Portfólio":
                return switchHeaderOptions("Portfólio")
            default:
                return switchHeaderOptions("Sobre Mim")
        }
    }

    return (
        <>
            <div onClick={() => setStatusMenu(true)} className={style.header_menu}>
                <div className={style.header_menu__risk} />
                <div className={style.header_menu__risk} />
                <div className={style.header_menu__risk} />
            </div>
            {statusMenu ? <section className={style.header_menu__section}>
                <p onClick={() => setStatusMenu(false)} className={style.header_menu__close}>X</p>
                {renderComponent()}
            </section> : null}
            {statusMenu ? <div className={style.header_menu__shadow} /> : null}
        </>
    )
}