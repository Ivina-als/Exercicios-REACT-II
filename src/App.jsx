import { useState } from "react";
import "./index.css";
import { Home } from "./Pages/Home";
import { Login } from "./Pages/Login";
import { SingUp } from "./Pages/SingUp";

function App() {
  const [currentPage, setCurrentPage] = useState("login");

  return (
    <>
      {currentPage === "login" && <Login onClickNavigate={setCurrentPage} />}
      {currentPage === "home" && <Home onClickNavigate={setCurrentPage} />}
      {currentPage === "singUp" && <SingUp onClickNavigate={setCurrentPage} />}
    </>
  );
}
export default App;
