import { useGeneralContext } from "../../providers/general-context";
import {FragmentTheme} from "./style.component.js"
import style from "./style.module.css"

export const Home_nav = () => {

    const { setCurrentRender } = useGeneralContext()

    return (
        <FragmentTheme className={`exitNav Nav ${style.main_nav}`}>
            <div onClick={() => { setCurrentRender("Projetos FrontEnd");}} className={style.main_nav__option}>
                <p className={style.main_nav__paragraph}>
                    <span className={style.main_nav__text}>Projetos</span>
                    <span className={style.main_nav__subinfo}>Front-End</span>
                </p>
            </div>
            <div className={`clip ${style.main_nav__clip}`} />
            <div onClick={() => { setCurrentRender("Projetos BackEnd");}} className={style.main_nav__option}>
                <p className={style.main_nav__paragraph}>
                    <span className={style.main_nav__text}>Projetos</span>
                    <span className={style.main_nav__subinfo}>Back-End</span>
                </p>
            </div>
            <div className={`clip ${style.main_nav__clip}`} />
            <div onClick={() => { setCurrentRender("Sobre Mim")}} className={style.main_nav__option}>
                <span className={style.main_nav__text}>Contato</span>
            </div>
            <div className={`clip ${style.main_nav__clip}`} />
            <div onClick={() => { setCurrentRender("Sobre Mim") }} className={style.main_nav__option}>
                <p className={style.main_nav__paragraph}>
                    <span className={style.main_nav__text}>Sobre Mim</span>
                </p>
            </div>
        </FragmentTheme>
    )
}