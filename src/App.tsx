import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Router from "./Router";
import { SnackbarProvider } from "notistack";
import ThemeConfig from "./ThemeConfig";


function App() {
  return (
    
      <ThemeConfig>
        <SnackbarProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </SnackbarProvider>
      </ThemeConfig>
    
  );
}

export default App;
