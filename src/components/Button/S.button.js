import styled from "styled-components";

export const StyleButton = styled.button`
  appearance: none;
  background-color: ${(props) => props.background || ""};
  border: 0;
  cursor: pointer;
  padding: 8px;
  border-radius: 4px;
  div {
    color: ${(props) => props.color || ""};
  }
`;
