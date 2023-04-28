import { BrowserRouter as Router } from "react-router-dom";
import { Context } from "./context/context";
import "./reset.css";
import AppRouter from "./router/AppRouter";
import Footer from "./components/UI/Footer/Footer";

function App() {
  const isAuth: string = "";
  return (
    <Context.Provider value={isAuth}>
      <Router>
        <AppRouter />
        <Footer />
      </Router>
    </Context.Provider>
  );
}

export default App;
