import AppRoutes from "./routes/AppRoutes";
import { useTheme } from "./context/ThemeContext";

function App() {

  const { theme } = useTheme();

  return (

    <div className={theme}>

      <AppRoutes />

    </div>

  );

}

export default App;