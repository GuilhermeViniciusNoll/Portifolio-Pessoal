import { useGeneralContext } from "../../providers/general-context"
import {FragmentTheme} from "./style.component.js"
import style from "./style.module.css"

export const Header_options__primary = () => {

    const { currentRender, setCurrentRender } = useGeneralContext()
    const locals = ["Projetos BackEnd", "Projetos FrontEnd", "Sobre Mim"]

    const switchHeaderOptions = (current) => {
        /* const list = locals.filter((element) => element != current) */
        return (
            <>
                {locals.map((element) =>
                    <>
                        <div className={style.header_option} onClick={() => { setCurrentRender(element);}}>
                            <p className={style.header_optionText}>{element}</p>
                        </div>
                        <div className={`clip ${style.clip}`} />
                    </>)
                }
            </>)
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
        <FragmentTheme className={style.header_containerSecond}>
            <div className={`clip ${style.clip}`} />
            {renderComponent()}
        </FragmentTheme>
    )
}