import { Header } from "../../layouts/header/index.jsx"
import { Button_return } from "../../components/button_return_home/index.jsx"
import { Modal_contact } from "../../components/modal_contact/index.jsx"
import { useGeneralContext } from "../../providers/general-context"
import style from "./style.module.css"

export const Back_end = () => {

    const { modalContact, setModalContact } = useGeneralContext()

    return (
        <>
            <Header />
            <main className={style.main}>
                <Button_return />
                <h2 className={style.main_title}> Principais Projetos Front-End</h2>
                <ul className={style.main_list}>
                    <li className={style.main_project}>
                        <div >
                            <div className={style.main_text}>
                                <h3>API BandKamp Python</h3>
                                <p>API desenvolvida em Python para que os usuários poderem se cadastrar, cadastrar álbuns e músicas. Esse projeto foi desenvolvido com Django, utilizando APIView, Serializer e SQLite3.  </p>
                            </div>
                            <p className={style.main_paragraph}>
                                <a href="https://github.com/GuilhermeViniciusNoll/m5-bandkamp-generic-view-GuilhermeViniciusNoll" target="_blank">Repositório</a>
                            </p>
                        </div>
                    </li>
                    <li className={style.main_project}>
                        <div>
                            <div className={style.main_text}>
                                <h3>API Gerenciador de Cursos</h3>
                                <p>MVP de uma API que faz o controle de usuários e cursos em que esses usuários serão matriculados. Essa API tem um controle de acessos, onde alguns recursos podem ser acessados apenas por usuários que fizeram login na aplicação, e outros recursos apenas usuários que fizeram login e tem permissões de administrador podem acessar. API desenvolvida com Typescript.</p>
                            </div>
                            <p className={style.main_paragraph}>
                                <a href="https://github.com/GuilhermeViniciusNoll/API-User-Admin-Courses" target="_blank">Repositório</a>
                            </p>
                        </div>
                    </li>
                    <li className={style.main_project}>
                        <div>
                            <div className={style.main_text}>
                                <h3>API Imobiliária</h3>
                                <p>Através da aplicação é possível realizar o cadastro de imóveis e de usuários interessados na aquisição de propriedades. Além disso, é possível realizar o agendamento e consultar horários de visitas às propriedades disponíveis no banco de dados da imobiliária. Essa API foi desenvolvida em Typescript usando TypeORM e Express</p>
                            </div>
                            <p className={style.main_paragraph}>
                                <a href="https://github.com/GuilhermeViniciusNoll/KImoveis-Imobiliaria-API-RESTful" target="_blank">Repositório</a>
                            </p>
                        </div>
                    </li>
                    <li className={style.main_project}>
                        <div>
                            <div className={style.main_text}>
                                <h3>API Locadora</h3>
                                <p> Essa API tem o intuito de gerenciar um coleção de filmes disponíveis. foi desenvolvida em Typescript usando TypeORM e Express. </p>
                            </div>
                            <p className={style.main_paragraph}>
                                <a href="https://github.com/GuilhermeViniciusNoll/Locadora-Filmes-API-RESTful" target="_blank">Repositório</a>
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