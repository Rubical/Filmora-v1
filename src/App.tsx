import cl from "./App.module.css";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/UI/NavBar/NavBar";
import { SideBarLeft } from "./components/UI/SideBar/SideBarLeft/SideBarLeft";
import { Context } from "./context/context";
import SideBarRightLogined from "./components/UI/SideBar/SideBarRight/SideBarRightLogined";
import SignInBtn from "./components/UI/Button/SignInBtn";
import AppRouter from "./router/AppRouter";
import Footer from "./components/UI/Footer/Footer";

function App() {
  let isAuth: string = "sad";
  return (
    <Context.Provider value={isAuth}>
      <Router>
        <div className={cl.app}>
          <div className={cl.grid}>
            <SideBarLeft />
            <div className={cl.main}>
              <NavBar />
              <AppRouter />
              <Footer />
            </div>
            {isAuth ? <SideBarRightLogined /> : <SignInBtn />}
          </div>
        </div>
      </Router>
    </Context.Provider>
  );
}

export default App;
