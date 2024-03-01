import { Home } from "./pages/home"
import { About_me } from "./pages/about_me/index.jsx"
import { Front_end } from "./pages/front_end/index.jsx"
import { Header } from "./layouts/header"
import { useGeneralContext } from "./providers/general-context.jsx"
import { useThemeContext } from "./styles/theme/provider/theme-context.jsx"
import { ThemeProvider } from "styled-components"
import { Back_end } from "./pages/back-end/index.jsx"
import { FragmentThemeModal } from "./styles/styles/modal/style.component.js"
import imgSun from "./assets/sunCode.png"
import style from "./styles/styles/modal/style.module.css"
import "./styles/index.css"

export const App = () => {

  const { themeName, listTheme, statusMenu, setStatusMenu } = useThemeContext()
  const {currentRender, setCurrentRender} = useGeneralContext()
  const locals = ["Projetos BackEnd", "Projetos FrontEnd", "Sobre Mim"]

  return (<>
      <ThemeProvider theme={listTheme[themeName]}>
         {currentRender != "home" ? <Header/>: null} 
         {currentRender === "home" ? <Home/>: null} 
         {currentRender === "Sobre Mim" ? <About_me/>: null} 
         {currentRender === "Projetos FrontEnd" ? <Front_end/>: null} 
         {currentRender === "Projetos BackEnd" ? <Back_end/>: null} 
         {statusMenu ? 
                <FragmentThemeModal className={style.modal__shadow}>
                    <div className={style.modal}>
                        <p onClick={() => setStatusMenu(false)} className={style.modal__close}>X</p>
                        {locals.map((element) =>
                          <p onClick={() => { setCurrentRender(element); setStatusMenu(false) }} className={style.modal__option}>{element}</p>)
                        }
                        {themeName == "dark" ?
                            <img className={style.header__storm} src='' alt="stormCode" /> :
                            <img className={style.header__sun} src={imgSun} alt="sunCode"/>
                        }
                    </div> 
                </FragmentThemeModal> : null}
      </ThemeProvider>
  </>
  )
}