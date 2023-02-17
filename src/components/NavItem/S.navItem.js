import styled from "styled-components";

export const StyleNavItem = styled.div`
  color: ${(props) => props.color || "white"};
  cursor: pointer;

  &:hover {
    color: #c0c0c0;
  }
  transition: all 0.2s ease-in-out;
`;
