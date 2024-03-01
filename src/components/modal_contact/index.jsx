import { useGeneralContext } from "../../providers/general-context"
import { FragmentTheme } from "./style.component"
import img from "../../assets/icon_return.png"
import github from "../../assets/github.png"
import email from "../../assets/e-mail.png"
import linkedin from "../../assets/linkedin.png"
import style from "./style.module.css"
import imgSung from "../../assets/sunCode.png"

export const Modal_contact = () => {

    const { setModalContact } = useGeneralContext()

    return (
        <FragmentTheme className={style.modal_fragment}>
            <div className={style.modal}>
                <div className={style.container_images}>
                    <img className={style.contact_modal__return} onClick={() => setModalContact(false)} src={img} />
                    <img className={style.imgSun} src={imgSung} alt="Sun code" />
                </div>
                <h1 className={style.title}>Contatos</h1>
                <ul className={style.list}>
                    <li className={style.item}>
                        <a className={`containerColor`} href="https://github.com/GuilhermeViniciusNoll" target="_blank">
                            <img src={github} />
                        </a>
                        <div className={style.container}>
                            <p>GitHub</p>
                            <span>GuilhermeViniciusNoll</span>
                        </div>
                    </li>
                    <li className={style.item}>
                        <div className={`containerColor`}>
                            <img src={email} />
                        </div>
                        <div className={style.container}>
                            <p>Email</p>
                            <span>guilhermeVNbugs@outlook.com</span>
                        </div>
                    </li>
                    <li className={style.item}>
                        <a className={`containerColor`} href="https://www.linkedin.com/in/guilherme-bugs/" target="_blank">
                            <img src={linkedin} />
                        </a>
                        <div className={style.container}>
                            <p>Linkedin</p>
                            <span>Guilherme Bugs</span>
                        </div>
                    </li>
                </ul>
            </div>
        </FragmentTheme>
    )
}