
import { Header } from "../../layouts/header/index.jsx"
import { Button_return } from "../../components/button_return_home/index.jsx"
import { useNavigate } from "react-router-dom"
import style from "./style.module.css"

export const Portfolio = () => {

    const navigate = useNavigate()

    return (
        <>
            <Header />
            <main className={style.main}>
                <Button_return />
                <h2 className={style.main_title}>Portfólios</h2>
                <span>🛠️ ⚠️Em construção 🛠️⚠️ </span>
                <p>Está secção estará disponível para apresentação de outros portfólios similares a esse de minha autoria porém utilizando outras tecnologias e frameworks além de ser o local de acesso dos mesmos. Posteriormente será apresentado uma explicação da construção de cada portfólio.  </p>
                <button className={style.main_button} onClick={() => navigate("/")}>Retornar</button>
            </main>
        </>
    )
}