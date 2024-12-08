//import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "@mui/material";
import mainTheme from "./themes/mainTheme.ts";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <ThemeProvider theme={mainTheme}>
      <App />
    </ThemeProvider>
  </Provider>
);
