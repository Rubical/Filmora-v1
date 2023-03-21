import "./App.css";
import NavBar from "./components/UI/NavBar/NavBar";
import { SideBarLeft } from "./components/UI/SideBar/SideBarLeft/SideBarLeft";
import { Context } from "./context/context";
import MainPage from "./pages/MainPage";

function App() {
  let isAuth: string = "sad";
  return (
    <Context.Provider value={isAuth}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 5fr",
          backgroundColor: "black",
          minHeight: "100vh",
        }}
        className="App"
      >
        <SideBarLeft />
        <div className="main" style={{ position: "relative" }}>
          <NavBar />
          <MainPage />
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
