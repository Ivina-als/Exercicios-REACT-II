import styled from "styled-components";

const StyleText = styled.div`
  padding-bottom: 30px;
`;

export const TitleLogo = (props) => {
  return (
    <StyleText>
      <img src={props.src} style={{ width: props.width }} />
    </StyleText>
  );
};
