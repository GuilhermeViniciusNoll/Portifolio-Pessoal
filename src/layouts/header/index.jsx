import { useMediaQuery } from "react-responsive"
import { Header_options__mobile } from "../../components/mobile/header_options/index.jsx"
import { Header_options__primary } from "../../components/header_options/index.jsx"
import style from "./style.module.css"

export const Header = () => {

    const isMobile = useMediaQuery({ minWidth: 705 })

    return (
        <>
            <header className={style.header}>
                <div className={style.header_container}>
                    <h1 className={style.header_name}>Guilherme Vinicius</h1>
                    <span className={style.header_description}>Developer</span>
                </div>
                {isMobile ? <Header_options__primary /> : <Header_options__mobile />}
            </header>
        </>
    )
}