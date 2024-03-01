import React from "react"
import ReactDOM from "react-dom/client"
import {App} from "./App.jsx"
import { ThemeProviderCustom } from "./styles/theme/provider/theme-context.jsx"
import { GeneralProvider } from "./providers/general-context.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProviderCustom>
      <GeneralProvider>
        <App />
      </GeneralProvider>
    </ThemeProviderCustom>
  </React.StrictMode>,
)
