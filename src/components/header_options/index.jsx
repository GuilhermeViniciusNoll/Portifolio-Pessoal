import { useNavigate } from "react-router-dom"
import { useGeneralContext } from "../../providers/general-context"
import style from "./style.module.css"

export const Header_options__primary = () => {

    const { currentRender, setCurrentRender } = useGeneralContext()
    const navigate = useNavigate()
    const locals = ["Projetos BackEnd", "Projetos FrontEnd", "Sobre Mim", "Portfólio"]

    const switchHeaderOptions = (current) => {
        const list = locals.filter((element) => element != current)
        return (
            <>
                {list.map((element) =>
                    <div className={style.header_option} onClick={() => { setCurrentRender(element); navigate(`/${element}`) }}>
                        <p className={style.header_optionText}>{element}</p>
                        <div className={style.clip} />
                    </div>
                )
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
        <nav className={style.header_containerSecond}>
            <div className={style.header_optionUnique}>
                <div className={style.clip} />
                <div className={style.header_optionText} />
            </div>
            {renderComponent()}
        </nav>
    )
}