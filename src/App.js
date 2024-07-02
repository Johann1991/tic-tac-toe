import AppRouter from "./AppRouter";
import "./styles/Global.styled";
import { GlobalStyle } from "./styles/Global.styled";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/theme";
import { useContext } from "react";
import  { ThemeContext } from './context/ThemeContext';

function App() {
  const { theme } = useContext(ThemeContext);

  const mode = (theme === "light" ? lightTheme : darkTheme)
  return (
    <div>
      <ThemeProvider theme={mode}>
        <GlobalStyle />
        <AppRouter />
      </ThemeProvider>
    </div>
  );
}

export default App;
