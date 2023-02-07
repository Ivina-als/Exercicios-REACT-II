import styled from "styled-components";

const StyleButton = styled.button``;
export const Button = (props) => {
  return <StyleButton>{props.children}</StyleButton>;
};
