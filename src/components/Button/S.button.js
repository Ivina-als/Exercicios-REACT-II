import styled from "styled-components";

export const StyleButton = styled.button`
  appearance: none;
  width: ${(props) => props.width || ""};
  background-color: ${(props) => props.background || ""};
  border: 0;
  cursor: pointer;
  padding: 8px;
  border-radius: 4px;
  color: ${(props) => props.colorText || ""};
  div {
    color: ${(props) => props.color || ""};
  }
`;
