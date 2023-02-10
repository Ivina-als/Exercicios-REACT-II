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
            <Button background="#131313" color="white">
              <Text bold>...</Text>
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
          <S.Box>
            <Text>2 Seguindo</Text>
          </S.Box>
        </S.ContainerHeader>
        <S.ContainerText>
          <TextLink color="white" href="https://www.google.com/">
            Clique aqui
          </TextLink>
        </S.ContainerText>
      </S.ContainerText>
    </S.StyleHeader>
  );
};
