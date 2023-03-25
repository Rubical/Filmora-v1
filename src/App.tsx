import cl from "./App.module.css";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/UI/NavBar/NavBar";
import { SideBarLeft } from "./components/UI/SideBar/SideBarLeft/SideBarLeft";
import { Context } from "./context/context";
import SideBarRightLogined from "./components/UI/SideBar/SideBarRightLogined";
import SignInBtn from "./components/UI/Button/SignIn";
import AppRouter from "./router/AppRouter";

function App() {
  let isAuth: string = "sadsad";
  return (
    <Context.Provider value={isAuth}>
      <Router>
        <div className={cl.app}>
          <SideBarLeft />
          <div className={cl.main}>
            <NavBar />
            <AppRouter />
          </div>
          {isAuth ? <SideBarRightLogined /> : <SignInBtn />}
        </div>
      </Router>
    </Context.Provider>
  );
}

export default App;
