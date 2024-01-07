import { Header } from "../../layouts/header/index.jsx"
import { Button_return } from "../../components/button_return_home/index.jsx"
import { Modal_contact } from "../../components/modal_contact/index.jsx"
import { useGeneralContext } from "../../providers/general-context"
import burguer from "../../assets/projetos/burguerKenzie.png"
import nuKenzie from "../../assets/projetos/nuKenzie.png"
import kenzieHub from "../../assets/projetos/kenzieHub.png"
import gitSearch from "../../assets/projetos/gitSearch.png"
import style from "./style.module.css"

export const Front_end = () => {

    const { modalContact, setModalContact } = useGeneralContext()

    return (
        <>
            <Header />
            <main className={style.main}>
                <Button_return />
                <h2 className={style.main_title}> Principais Projetos Front-End</h2>
                <ul className={style.main_list}>
                    <li className={style.main_project}>
                        <img src={burguer} />
                        <div >
                            <div className={style.main_text}>
                                <h3>Kenzie Burguer</h3>
                                <p>A aplicação é um catálogo simples de uma hamburgueria.
                                    Foi utilizado no projeto: HTML, CSS, JS, consumo de API, Axios, React, Styled Components</p>
                            </div>
                            <p className={style.main_paragraph}>
                                <a href="https://react-entrega-s3-template-hamburgueria-guilherme-vinicius-noll.vercel.app/" target="_blank">Link</a>
                                <a href="https://github.com/GuilhermeViniciusNoll/react-hamburgueria" target="_blank">Repositório</a>
                            </p>
                        </div>
                    </li>
                    <li className={style.main_project}>
                        <img src={gitSearch} alt="" />
                        <div>
                            <div className={style.main_text}>
                                <h3>Git Search</h3>
                                <p>
                                    A aplicação oferece um layout simples e intuitivo para buscar desenvolvedores e visualizar seus repositórios públicos no GitHub. Foi desenvolvida somente com CSS, HTML e JavaScript, o layout foi baseado no Figma e totalemente responsivo.
                                </p>
                            </div>
                            <p className={style.main_paragraph}>
                                <a href="https://guilhermeviniciusnoll.github.io/gitSearch/" target="_blank">Link</a>
                                <a href="https://github.com/GuilhermeViniciusNoll/gitSearch" target="_blank">Repositório</a>
                            </p>
                        </div>
                    </li>
                    <li className={style.main_project}>
                        <img src={kenzieHub} alt="" />
                        <div>
                            <div className={style.main_text}>
                                <h3>Kenzie Hub</h3>
                                <p>Nessa aplicação é possível cadastrar e armazenar as suas stacks e atribuir níveis de conhecimento.
                                    Foi utilizado no projeto: HTML, CSS, JS, consumo de API, Axios, React, Styled Components, React Hook Form e Zod, React Router Dom.</p>
                            </div>
                            <p className={style.main_paragraph}>
                                <a href="https://react-entrega-kenzie-hub-guilherme-vinicius-noll.vercel.app/" target="_blank">Link</a>
                                <a href="https://github.com/GuilhermeViniciusNoll/react-kenzie-hub" target="_blank">Repositório</a>
                            </p>
                        </div>
                    </li>
                    <li className={style.main_project}>
                        <img src={nuKenzie} alt="" />
                        <div>
                            <div className={style.main_text}>
                                <h3>Nu Kenzie</h3>
                                <p>Aplicação feita para gerenciar seu financeiro tendo um controle de entradas e saídas com descrição de cada movimentação, ela tem um layout simples e clean, porém agradável e totalmente responsivo.</p>
                            </div>
                            <p className={style.main_paragraph}>
                                <a href="https://react-entrega-s1-template-nu-kenzie-guilherme-vinicius-noll.vercel.app/" target="_blank">Link</a>
                                <a href="https://github.com/GuilhermeViniciusNoll/react-nu-kenzie" target="_blank">Repositório</a>
                            </p>
                        </div>
                    </li>
                </ul>
                <h2 className={style.main_refer}>Caso tenha interesse em ver outros projetos acesse meu <a href="https://github.com/GuilhermeViniciusNoll" target="_blank">GitHub</a> ou entre em contato.</h2>
                <button className={style.main_contact} onClick={() => setModalContact(true)}>Contato</button>
            </main >
            {modalContact ? <Modal_contact /> : null}
        </>
    )
}