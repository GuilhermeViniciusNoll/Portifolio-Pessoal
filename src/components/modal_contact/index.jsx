import { useGeneralContext } from "../../providers/general-context"
import img from "../../assets/icon_return.png"
import github from "../../assets/github-sign.png"
import email from "../../assets/email.png"
import linkedin from "../../assets/linkedin.png"
import style from "./style.module.css"
import { useNavigate } from "react-router-dom"

export const Modal_contact = () => {

    const { setModalContact } = useGeneralContext()
    const navigate = useNavigate()

    return (
        <div className={style.contact_modal}>
            <div className={style.contact_modal__container}>
                <img className={style.contact_modal__return} onClick={() => setModalContact(false)} src={img} />
                <h1>Contatos</h1>
                <ul className={style.contact_modal__list}>
                    <li className={style.contact_modal__item}>
                        <a href="https://github.com/GuilhermeViniciusNoll" target="_blank">
                            <img className={style.contact_modal__logo} src={github} />
                        </a>
                        <span className={style.contact_modal__user}>GuilhermeViniciusNoll</span>
                    </li>
                    <li className={style.contact_modal__item}>
                        <img className={style.contact_modal__logo} src={email} />
                        <span className={style.contact_modal__user}>guilhermeVNbugs@outlook.com</span>
                    </li>
                    <li className={style.contact_modal__item}>
                        <a href="https://www.linkedin.com/in/guilherme-bugs/" target="_blank">
                            <img className={style.contact_modal__logo} src={linkedin} />
                        </a>
                        <span className={style.contact_modal__user}>Guilherme Bugs</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}