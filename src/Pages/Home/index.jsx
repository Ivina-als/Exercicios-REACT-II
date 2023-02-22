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
import grid from "../../assets/grid.svg";
import reels from "../../assets/reel.png";
import marked from "../../assets/marked2.svg";

export const Home = () => {
  const [activeHome, setActiveHome] = useState("feed");

  return (
    <Grid templateColumns="20% 80%">
      <DivBody>
        <NavBar />
      </DivBody>
      <DivSection>
        <DivBody>
          <Header />
        </DivBody>
        <DivBody>
          <Highlights border />
        </DivBody>
        {/*Botões feed*/}
        <S.DivButtonsFeed>
          <S.DivStateHome>
            <S.DivButton isActive={activeHome === "feed"}>
              <S.IconFeed src={grid} width="10px" />
              <Button
                background="#131313"
                colorText="#ffff"
                onClick={() => setActiveHome("feed")}
              >
                Publicações
              </Button>
            </S.DivButton>
            <S.DivButton isActive={activeHome === "reels"}>
              <S.IconFeed src={reels} width="12px" />
              <Button
                background="#131313"
                colorText="#ffff"
                onClick={() => setActiveHome("reels")}
              >
                Reels
              </Button>
            </S.DivButton>
            <S.DivButton isActive={activeHome === "marked"}>
              <S.IconFeed src={marked} width="13px" />
              <Button
                background="#131313"
                colorText="#ffff"
                onClick={() => setActiveHome("marked")}
              >
                Marcados
              </Button>
            </S.DivButton>
          </S.DivStateHome>
        </S.DivButtonsFeed>

        <DivBody>
          {activeHome === "feed" && <Feed />}
          {activeHome === "reels" && <Reels />}
          {activeHome === "marked" && <Marked />}
        </DivBody>
      </DivSection>
    </Grid>
  );
};
