import styled from "styled-components";

export const StyleText = styled.div`
  text-align: ${(props) => props.textAlign || ""};
  padding-bottom: 30px;
`;

export const ImgTitle = styled.img`
  width: ${(props) => props.width};
`;
