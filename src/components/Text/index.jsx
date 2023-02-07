import styled from "styled-components";

const StyleText = styled.span`
  color: ${(props) => props.color || "#fff"};
  font-weight: ${(props) => (props.bold ? 900 : "")};
`;

export const Text = (props) => {
  return <StyleText {...props}>{props.children}</StyleText>;
};
