import { useMediaQuery } from "react-responsive"
import { Header_options__mobile } from "../../components/mobile/header_options/index.jsx"
import { Header_options__primary } from "../../components/header_options/index.jsx"
import { FragmentTheme_Header } from "./style.component.js"
import { useThemeContext } from "../../styles/theme/provider/theme-context.jsx"
import style from "./style.module.css"
import imgSun from "../../assets/sunCode.png"

export const Header = () => {

    const { themeName } = useThemeContext()
    const isMobile = useMediaQuery({ minWidth: 750 })

    return (
        <>
            <FragmentTheme_Header className={style.header}>
                    {themeName == "dark" ?
                            <img className={style.header__storm} src='' alt="stormCode" /> :
                            <img className={style.header__sun} src={imgSun} alt="sunCode"/>
                    }
                    <div className={style.header_container_style}>
                        <div className={style.header_container}>
                            <h1 className={style.header_name}>Guilherme</h1>
                            <span className={style.header_description}>DEVELOPER</span>
                        </div>
                        {isMobile ? <Header_options__primary /> : <Header_options__mobile />}
                    </div>
            </FragmentTheme_Header>
        </>
    )
}