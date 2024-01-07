
import { Header } from "../../layouts/header/index.jsx"
import { Button_return } from "../../components/button_return_home/index.jsx"
import { Modal_contact } from "../../components/modal_contact/index.jsx"
import { useGeneralContext } from "../../providers/general-context.jsx"
import data from "../../database/db_about_me.json"
import style from "./style.module.css"

export const About_me = () => {

    const { modalContact, setModalContact } = useGeneralContext()

    return (
        <>
            <Header />
            <main className={style.main__about_me}>
                <Button_return />
                <div className={style.main__div}>
                    <section className={style.main_container}>
                        <h2 className={style.main_container__title}>História</h2>
                        <p className={style.main_container__text}>{data.Historia}</p>
                    </section>
                    <div className={style.main_div__style} />
                    <section className={style.main_container}>
                        <h2 className={style.main_container__title}>Sobre Mim</h2>
                        <p className={style.main_container__text}>{data["Sobre Mim"]}</p>
                    </section>
                </div>
                <section className={style.main_section}>
                    <h2 className={style.main_container__title}>Conhecimento</h2>
                    <p className={style.main_container__text}>{data.Conhecimento}</p>
                    <h3 className={style.main_container__subtitle}>Tecnologias</h3>
                    <p className={style.main_container__text}>{data.Tecnologias}</p>
                </section>
                <div className={style.main_contact}>
                    <button onClick={() => setModalContact(true)}>Contato</button>
                </div>
                {modalContact ? <Modal_contact /> : null}
            </main>
        </>
    )
}