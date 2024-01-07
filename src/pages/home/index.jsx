import { useEffect } from "react"
import { Home_nav } from "../../components/home_nav/index.jsx"
import { useGeneralContext } from "../../providers/general-context"
import style from "./style.module.css"

export const Home = () => {

    const { setCurrentRender } = useGeneralContext()

    useEffect(() => {
        setCurrentRender("aboutMe")
    }, [])

    return (
        <>
            <main className={style.main}>
                <section className={style.main_section}>
                    <div className={style.main_section__sub}>
                        <h1 className={style.main_section__name}>Guilherme Vinicius</h1>
                        <h2 className={style.main_section__subtitle}>Developer</h2>
                    </div>
                    <div className={style.main_section__imagem}>
                        <span onClick={() => window.open("https://giphy.com/gifs/dommespace-domme-space-programador-qgQUggAC3Pfv687qPC?utm_source=iframe&utm_medium=embed&utm_campaign=Embeds&utm_term=http%3A%2F%2Flocalhost%3A5173%2F")} className={style.main_section__rights}>
                            via GIPHY
                        </span>
                        <iframe src="https://giphy.com/embed/qgQUggAC3Pfv687qPC" />
                    </div>
                </section>
                <Home_nav />
            </main>
        </>
    )
}