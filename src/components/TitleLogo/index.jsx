import styled from "styled-components";

const StyleText = styled.div`
  padding-bottom: 30px;
`;

//criar um styled img para abrigar o width como props igual o componente do avatar

export const TitleLogo = (props) => {
  return (
    <StyleText>
      <img src={props.src} style={{ width: props.width }} />
    </StyleText>
  );
};
