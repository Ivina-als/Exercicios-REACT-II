import { NavItem } from "../../components/NavItem";
import { TitleLogo } from "../../components/TitleLogo";
import instagram from "../../assets/instagram.svg";
import styled from "styled-components";

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

const NavBarWrapper = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #000;
  height: 100%;
  width: calc(20% - 60px);
  position: fixed;
  padding: 50px 30px;
`;
const Box = styled.div``;

export const NavBar = (props) => {
  return (
    <NavBarWrapper>
      <Box>
        <Box>
          <TitleLogo src={instagram} width="50%" />
        </Box>
        <Box>
          {textNavItens.map((item) => (
            <NavItem key={item} text={item} />
          ))}
        </Box>
      </Box>
      <NavItem text="Mais" />
    </NavBarWrapper>
  );
};
