import { NavItem } from "../../components/NavItem";
import { TitleLogo } from "../../components/TitleLogo";
import instagram from "../../assets/instagram.svg";
import {
  NavBarWrapper,
  Box,
  MoreBox,
  Profile,
  BoxNav,
  BoxButtons,
} from "./S.Nav";
import { IconNav } from "../../components/IconNav";
import iconHome from "../../assets/house.svg";
import search from "../../assets/lupa.svg";
import explorer from "../../assets/explorar.svg";
import reels from "../../assets/reel.png";
import msg from "../../assets/message.svg";
import notification from "../../assets/heart2.svg";
import create from "../../assets/create.svg";
import nav from "../../assets/menu.svg";
import profile from "../../assets/profile.svg";

const textNavItens = [
  { name: "Página inicial", icon: `${iconHome}`, badge: "none" },
  { name: "Pesquisa", icon: `${search}`, badge: "none" },
  { name: "Explorar", icon: `${explorer}`, badge: "none" },
  { name: "Reels", icon: `${reels}`, badge: "none" },
  { name: "Mensagens", icon: `${msg}`, badge: "block" },
  { name: "Notificações", icon: `${notification}`, badge: "none" },
  { name: "Criar", icon: `${create}`, badge: "none" },
  { name: "Perfil", icon: `${profile}`, badge: "none" },
];

export const NavBar = (props) => {
  return (
    <NavBarWrapper>
      <BoxButtons>
        <Box>
          <TitleLogo src={instagram} width="60%" />
        </Box>
        <Box fontSize="1.2rem" color="#999999">
          {textNavItens.map((item, index) => (
            <BoxNav key={index}>
              <IconNav badge={item.badge}>{item.icon}</IconNav>
              <NavItem text={item.name} />
            </BoxNav>
          ))}
        </Box>
        <MoreBox fontSize="1.2rem" color="#999999">
          <IconNav badge="none">{nav}</IconNav>
          <NavItem text="Mais" />
          <Profile />
        </MoreBox>
      </BoxButtons>
    </NavBarWrapper>
  );
};
