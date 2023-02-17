import * as S from "./styles";
import { Avatar } from "../../components/Avatar/avatar";
import { Button } from "../../components/Button";
import { Text } from "../../components/Text";
import avatar from "../../assets/ada.png";
import { TextLink } from "../../components/Text/S.text";

export const Header = (props) => {
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
              <Text color="black">Seguindo</Text>
            </Button>
          </S.Box>
          <S.Box>
            <Button>
              <Text color="black">Enviar mensagem</Text>
            </Button>
          </S.Box>
          <S.Box>
            <Button>
              <Text>iconHeader</Text>
            </Button>
          </S.Box>
          <S.Box>
            <Button
              background=" #1071b1"
              color="black"
              onClick={() => props.onClickNavigate("login")}
            >
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
