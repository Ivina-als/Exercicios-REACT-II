import { Avatar } from "../../components/Avatar/avatar";
import { Button } from "../../components/Button";
import { HeaderText } from "../../components/Header-texts";
import { HeaderTop } from "../../components/Header-Top";
import { Text } from "../../components/Text";
import styled from "styled-components";

const StyleHeader = styled.div`
  color: #fff;
`;

export const Header = (props) => {
  return (
    <StyleHeader>
      <HeaderTop>
        <Avatar />
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
      </HeaderTop>
      <HeaderText>
        <Text>211 Publicações</Text>
        <Text>44 mil Seguidores</Text>
        <Text>2 Seguindo</Text>
      </HeaderText>
    </StyleHeader>
  );
};
