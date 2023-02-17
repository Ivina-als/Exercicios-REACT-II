import "../../../src/index.css";
import { useState, useEffect } from "react";
import { DivBody, DivSection, Grid } from "../../Grids/Feed/S.Grid";
import { NavBar } from "../../Grids/NavBar";
import { Header } from "../../Grids/Header";
import { Highlights } from "../../components/Highlights";
import { Feed } from "../../Grids/Feed";
import * as S from "./S.home";
import { Button } from "../../components/Button";
import { Reels } from "../Reels";
import { Marked } from "../Marked";

export const Home = (props) => {
  //estado do feed da home
  const [activeHome, setActiveHome] = useState("feed");

  return (
    <Grid templateColumns="20% 80%">
      <DivBody>
        <NavBar />
      </DivBody>
      <DivSection>
        <DivBody>
          <Header {...props} />
        </DivBody>
        <DivBody>
          <Highlights />
        </DivBody>
        {/*Botões feed*/}
        <S.DivStateHome>
          <S.DivButton isActive={activeHome === "feed"}>
            <Button
              background="#131313"
              colorText="#ffff"
              onClick={() => setActiveHome("feed")}
            >
              Publicações
            </Button>
          </S.DivButton>
          <S.DivButton isActive={activeHome === "reels"}>
            <Button
              background="#131313"
              colorText="#ffff"
              onClick={() => setActiveHome("reels")}
            >
              Reels
            </Button>
          </S.DivButton>
          <S.DivButton isActive={activeHome === "marked"}>
            <Button
              background="#131313"
              colorText="#ffff"
              onClick={() => setActiveHome("marked")}
            >
              Marcados
            </Button>
          </S.DivButton>
        </S.DivStateHome>

        <DivBody>
          {activeHome === "feed" && <Feed />}
          {activeHome === "reels" && <Reels />}
          {activeHome === "marked" && <Marked />}
        </DivBody>
      </DivSection>
    </Grid>
  );
};
