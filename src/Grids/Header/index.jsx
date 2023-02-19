import * as S from "./styles";
import { Avatar } from "../../components/Avatar/avatar";
import { Button } from "../../components/Button";
import { Text } from "../../components/Text";
import avatar from "../../assets/ada.png";
import { TextLink } from "../../components/Text/S.text";
import { InstaContext } from "../../App";
import { useContext } from "react";
import add from "../../assets/add.png";
import down from "../../assets/downArrow.svg";
import logout from "../../assets/logout.svg";

export const Header = (props) => {
  const state = useContext(InstaContext);
  return (
    <S.StyleHeader>
      <Avatar src={avatar} />

      <S.ContainerText>
        <S.ContainerHeader>
          <S.Box>
            <Text bold>adatechbr</Text>
          </S.Box>
          <S.Box>
            <Button>
              <Text color="black" bold>
                Seguindo
              </Text>
            </Button>
          </S.Box>
          <S.Box>
            <Button
              style={{ gap: "2px", display: "flex", alignItems: "center" }}
            >
              <Text color="black" bold>
                Enviar mensagem
              </Text>
              <img src={down} style={{ width: "10px" }} />
            </Button>
          </S.Box>
          <S.Box>
            <Button>
              <Text>
                <img src={add} style={{ width: "15px" }} />
              </Text>
            </Button>
          </S.Box>
          <S.Box>
            <Button
              style={{ gap: "4px", display: "flex", alignItems: "center" }}
              background=" #131313"
              onClick={() => props.onClickNavigate("login")}
            >
              <img src={logout} style={{ width: "25px" }} />
              <Text>Sair</Text>
            </Button>
          </S.Box>
        </S.ContainerHeader>
        <S.ContainerHeader>
          <S.Box>
            <Text>211 Publicações</Text>
          </S.Box>
          <S.Box>
            <Text>44 mil Seguidores</Text>
          </S.Box>
        </S.ContainerHeader>
        <S.ContainerText>
          <Text bold> Ada Tech</Text>

          <Text size="small" color="grey">
            Educação
          </Text>

          <TextLink color="white" href="https://www.google.com/">
            Clique aqui
          </TextLink>
          <Text>Ada A Nova Educação</Text>
          <Text size="small">beatriz.a/adatech</Text>
          <S.Follow>
            <Text size="small" color="gray">
              Seguido por
            </Text>
            <Text size="small">vina.als, vitoria.candido, amoendas_</Text>
            <Text size="small" color="gray">
              e outras 2 pessoas
            </Text>
          </S.Follow>
        </S.ContainerText>
      </S.ContainerText>
    </S.StyleHeader>
  );
};
