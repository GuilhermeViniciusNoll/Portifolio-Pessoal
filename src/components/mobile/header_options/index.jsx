import { FragmentTheme } from "./style.component"
import { useThemeContext } from "../../../styles/theme/provider/theme-context"
import style from "./style.module.css"

export const Header_options__mobile = () => {
    
    const { setStatusMenu } = useThemeContext()

    return (
        <>
            <FragmentTheme onClick={() => setStatusMenu(true)} className={style.header_menu}>
                <div className={`${style.header_menu__risk} risk`} />
                <div className={`${style.header_menu__risk} risk`} />
                <div className={`${style.header_menu__risk} risk`} />
            </FragmentTheme>
        </>
    )
}