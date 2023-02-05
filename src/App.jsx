import { useState } from "react";
import NavBar from "./Grids/NavBar/index";
import { Button } from "./components/Button";
import { TitleLogo } from "./components/TitleLogo";
import { NavItem } from "./components/NavItem";
import { Header } from "./Grids/Header";
import { Avatar } from "./components/Avatar/avatar";
import { Text } from "./components/Text";
import { HeaderText } from "./components/Header-texts/index";
import { HeaderTop } from "./components/Header-Top";

const textNavItens = [
  "Página inicial",
  "Pesquisa",
  "Explorar",
  "Reels",
  "Mensagens",
  "Notificações",
  "Criar",
  "Perfil",
];

function App() {
  return (
    <section style={{ display: "flex", gap: "3rem", padding: "2rem" }}>
      <NavBar>
        <TitleLogo />
        {textNavItens.map((item) => (
          <NavItem key={item} text={item} />
        ))}
      </NavBar>
      <Header>
        <HeaderTop>
          <Avatar />
          <Text bold>@adatechbr</Text>
          <Button>Seguindo</Button>
          <Button>Enviar mensagem</Button>
          <Button>iconHeader</Button>
          <Button>...</Button>
        </HeaderTop>
        <HeaderText>
          <Text>211 Publicações</Text>
          <Text>44 mil Seguidores</Text>
          <Text>2 Seguindo</Text>
        </HeaderText>
      </Header>
    </section>
  );
}

export default App;
