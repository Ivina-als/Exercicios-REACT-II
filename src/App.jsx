import { useState, useReducer, useEffect } from "react";
import "./index.css";
import { Home } from "./Pages/Home";
import { Login } from "./Pages/Login";
import { SingUp } from "./Pages/SingUp";

function reducer(state, action) {
  switch (action.type) {
    case "change_current_page":
      return {
        currentPage: action.payload,
      };

    default:
      return state;
  }
}

const initialState = {
  currentPage: "login",
};

function App() {
  const [globalState, dispatch] = useReducer(reducer, initialState);

  const handleNavigate = (page) => {
    dispatch({ type: "change_current_page", payload: page });
  };

  return (
    <>
      {globalState.currentPage === "login" && (
        <Login onClickNavigate={handleNavigate} />
      )}
      {globalState.currentPage === "home" && (
        <Home onClickNavigate={handleNavigate} />
      )}
      {globalState.currentPage === "singUp" && (
        <SingUp onClickNavigate={handleNavigate} />
      )}
    </>
  );
}
export default App;
