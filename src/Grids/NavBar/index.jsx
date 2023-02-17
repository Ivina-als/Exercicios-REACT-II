import { NavItem } from "../../components/NavItem";
import { TitleLogo } from "../../components/TitleLogo";
import instagram from "../../assets/instagram.svg";
import { NavBarWrapper, Box, MoreBox } from "./S.Nav";

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

export const NavBar = (props) => {
  return (
    <NavBarWrapper>
      <Box>
        <Box>
          <TitleLogo src={instagram} width="50%" />
        </Box>
        <Box fontSize="1.2rem" color="#999999">
          {textNavItens.map((item) => (
            <NavItem key={item} text={item} />
          ))}
        </Box>
        <MoreBox fontSize="1.2rem" color="#999999">
          <NavItem text="Mais" />
        </MoreBox>
      </Box>
    </NavBarWrapper>
  );
};
