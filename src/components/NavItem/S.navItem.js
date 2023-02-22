import styled from "styled-components";

export const StyleNavItem = styled.div`
  color: ${(props) => props.color || "white"};
  cursor: pointer;

  transition: all 0.2s ease-in-out;
`;
