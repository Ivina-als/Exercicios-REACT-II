import { useReducer, createContext } from "react";
import "./index.css";
import { Home } from "./Pages/Home";
import { Login } from "./Pages/Login";
import { Photo } from "./Pages/Photo";
import { SingUp } from "./Pages/SingUp";

function reducer(state, action) {
  switch (action.type) {
    case "change_current_page":
      return {
        ...state,
        currentPage: action.payload,
      };
    case "add_user":
      return {
        ...state,
        user: {
          ...state,
          userName: action.payload,
        },
      };
    case "add_photo":
      return {
        ...state,
        user: {
          ...state.user,
          photos: action.payload,
        },
      };
    case "add_image_fetch":
      const currentImage = state.user.photos.find(
        (item) => item.id === action.payload
      );
      return {
        ...state,
        user: {
          ...state.user,
          image: currentImage,
        },
      };
    default:
      return state;
  }
}

const initialState = {
  currentPage: "login",
  user: { userName: "@CadeAhOi" },
  photos: [],
  image: null,
};

export const InstaContext = createContext(initialState);

function App() {
  const [globalState, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <InstaContext.Provider
        value={{ meuState: globalState, meuDispatch: dispatch }}
      >
        {globalState.currentPage === "login" && <Login />}
        {globalState.currentPage === "home" && <Home />}
        {globalState.currentPage === "singUp" && <SingUp />}
        {globalState.currentPage === "fullScreen" && <Photo />}
      </InstaContext.Provider>
    </>
  );
}
//2:03min
export default App;
