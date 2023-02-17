import styled from "styled-components";

export const DivStateHome = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const DivButton = styled.div`
  border-top: 1px solid ${(props) => (props.isActive ? "white" : "#131313")};
`;
