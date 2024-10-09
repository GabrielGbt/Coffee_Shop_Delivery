
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/default";

import { GlobalStyle } from "./styles/global";
import { DataStateContextProvider } from "./contexts/state/coffees";


export function App() {
  
  return (
    <ThemeProvider theme={defaultTheme}>

      <BrowserRouter>
        <DataStateContextProvider>
          <Router />
        </DataStateContextProvider>
      </BrowserRouter>

      <GlobalStyle/>
    </ThemeProvider>
  )
}
