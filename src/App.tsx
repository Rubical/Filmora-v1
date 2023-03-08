import "./App.css";
import NavBar from "./components/UI/NavBar/NavBar";
import SideBarLeft from "./components/UI/SideBar/SideBarLeft";
import FilmPage from "./pages/FilmPage";
import { Context } from "./context/context";
import SideBarRightLogined from "./components/UI/SideBar/SideBarRightLogined";

function App() {
  let isAuth: string = "dsa";
  return (
    <Context.Provider value={isAuth}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isAuth ? "1fr 4fr 1fr" : "1fr 5fr",
          backgroundColor: "rgb(20, 20, 20)",
          minHeight: "100vh",
        }}
        className="App"
      >
        <SideBarLeft />
        <div className="main" style={{ position: "relative" }}>
          <NavBar />
          <FilmPage />
        </div>
        {isAuth ? <SideBarRightLogined /> : null}
      </div>
    </Context.Provider>
  );
}

export default App;
