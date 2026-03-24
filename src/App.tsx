import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Router from "./Router";
import { SnackbarProvider } from "notistack";
import ThemeConfig from "./ThemeConfig";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <ThemeConfig>
        <SnackbarProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </SnackbarProvider>
      </ThemeConfig>
    </Provider>
  );
}

export default App;
