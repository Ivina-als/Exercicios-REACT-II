import { useState } from "react";
import { NavBar } from "./Grids/NavBar/index";
import { Header } from "./Grids/Header";
import "./index.css";
import styled from "styled-components";

const Grid = styled.section`
  position: relative;
  display: grid;
  height: 100vh;
  grid-template-columns: ${(props) => props.templateColumns};
`;

const DivBody = styled.div`
  position: relative;
  height: 100%;
`;

function App() {
  return (
    <Grid templateColumns="20% 80%">
      <DivBody>
        <NavBar />
      </DivBody>
      <DivBody>
        <Header />
      </DivBody>
    </Grid>
  );
}

//1h:57

export default App;
