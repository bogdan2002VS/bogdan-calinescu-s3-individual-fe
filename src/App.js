import "./App.css";
import AppRouter from "./router/AppRouter";
import { ThemeProvider } from "styled-components";
function App() {
  const theme = {
    colors: {
      navColor: "#3D4F22",
      turqo: "#4CAF50",
      cardBack: "#2E7D32",
      cardText: "#C8E6C9",
      buttonBg: "#1B5E20",
      Bloggy1: "#C8E6C9",
      Bloggy2: "#81C784",
      Bloggy4: "#1B5E20",
      
    },
    size: {
      xs: "560px",
      sm: "640px",
      md: "768px",
      mdl: "820px",
      lg: "1024px",
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <div>
        <AppRouter />
      </div>
    </ThemeProvider>
  );
}

export default App;
