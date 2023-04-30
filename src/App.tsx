import { BrowserRouter as Router } from "react-router-dom";
import "./reset.css";
import AppRouter from "./router/AppRouter";
import Footer from "./components/UI/Footer/Footer";

function App() {
  return (
    <Router>
      <AppRouter />
      <Footer />
    </Router>
  );
}

export default App;
