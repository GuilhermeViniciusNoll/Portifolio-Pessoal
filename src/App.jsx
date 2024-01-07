import { Home } from "./pages/home"
import { Route } from "react-router-dom"
import { About_me } from "./pages/about_me/index.jsx"
import { Back_end } from "./pages/back_end/index.jsx"
import { Front_end } from "./pages/front_end/index.jsx"
import { Portfolio } from "./pages/portfolio/index.jsx"
import { RouteComponent } from "./routes/index.jsx"
import { GeneralProvider } from "./providers/general-context.jsx"
import "./styles/reset.css"

const App = () => {

  return (<>
    <GeneralProvider>
      <RouteComponent>
        <Route path="/" element={<Home />} />
        <Route path="/Sobre Mim" element={<About_me />} />
        <Route path="/Projetos BackEnd" element={<Back_end />} />
        <Route path="/Projetos FrontEnd" element={<Front_end />} />
        <Route path="/Portfólio" element={<Portfolio />} />
      </RouteComponent>
    </GeneralProvider>
  </>
  )
}


export default App