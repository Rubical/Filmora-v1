import "./App.css";
import SignInBtn from "./components/UI/Button/SignIn";
import NavBarLogined from "./components/UI/NavBar/NavBarLogined";
import SideBar from "./components/UI/SideBar/SideBar";
import FilmPage from "./pages/FilmPage";

function App() {
  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 5fr 1fr",
          backgroundColor: "rgb(33, 33, 33)",
          minHeight: "100vh",
        }}
        className="App"
      >
        <SideBar />
        <NavBarLogined />
        <SignInBtn />
      </div>
      <FilmPage />
    </>
  );
}

export default App;
