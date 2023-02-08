import { Avatar } from "../../components/Avatar/avatar";
import { Button } from "../../components/Button";
import { Text } from "../../components/Text";
import styled from "styled-components";

const StyleHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40%;
  color: #fff;
`;

const ContainerHeader = styled.div``;

export const Header = (props) => {
  return (
    <StyleHeader>
      <ContainerHeader>
        <Avatar />
      </ContainerHeader>
      <ContainerHeader>
        <ContainerHeader>
          <Text bold>@adatechbr</Text>
          <Button>
            <Text color="black">Seguindo</Text>
          </Button>
          <Button>
            <Text color="black">Enviar mensagem</Text>
          </Button>
          <Button>iconHeader</Button>
          <Button>
            <Text color="black">...</Text>
          </Button>
        </ContainerHeader>
        <ContainerHeader>
          <Text>211 Publicações</Text>
          <Text>44 mil Seguidores</Text>
          <Text>2 Seguindo</Text>
        </ContainerHeader>
      </ContainerHeader>
    </StyleHeader>
  );
};
