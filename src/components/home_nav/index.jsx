import { useNavigate } from "react-router-dom";
import { useGeneralContext } from "../../providers/general-context";
import style from "./style.module.css"

export const Home_nav = () => {

    const { setCurrentRender } = useGeneralContext()
    const navigate = useNavigate()

    return (
        <nav className={style.main_nav}>
            <div onClick={() => { setCurrentRender("Projetos FrontEnd"); navigate("/Projetos FrontEnd") }} className={style.main_nav__option}>
                <p className={style.main_nav__paragraph}>
                    <span className={style.main_nav__text}>Projetos</span>
                    <span className={style.main_nav__subinfo}>Front-End</span>
                </p>
                <div className={style.main_nav__clip} />
            </div>
            <div onClick={() => { setCurrentRender("Projetos BackEnd"); navigate("/Projetos BackEnd") }} className={style.main_nav__option}>
                <p className={style.main_nav__paragraph}>
                    <span className={style.main_nav__text}>Projetos</span>
                    <span className={style.main_nav__subinfo}>Back-End</span>
                </p>
                <div className={style.main_nav__clip} />
            </div>
            <div onClick={() => { setCurrentRender("Portfólio"); navigate("/Portfólio") }} className={style.main_nav__option}>
                <span className={style.main_nav__text}>Portfólios</span>
                <div className={style.main_nav__clip} />
            </div>
            <div onClick={() => { setCurrentRender("Sobre Mim"); navigate("/Sobre Mim") }} className={style.main_nav__option}>
                <p className={style.main_nav__paragraph}>
                    <span className={style.main_nav__text}>Sobre Mim</span>
                    <span className={style.main_nav__subinfo}>Contato</span>
                </p>
            </div>
        </nav>
    )
}