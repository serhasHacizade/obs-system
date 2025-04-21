import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Header/>
      <Sidebar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
