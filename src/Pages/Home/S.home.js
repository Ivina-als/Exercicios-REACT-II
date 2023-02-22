import styled from "styled-components";

export const DivButtonsFeed = styled.div`
  display: flex;
  justify-content: center;
`;

export const DivStateHome = styled.div`
  border-top: 1px solid #80808038;
  width: 82%;
  padding: 0 10px 10px 10px;
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const DivButton = styled.div`
  border-top: 1px solid ${(props) => (props.isActive ? "white" : "#131313")};
`;

export const IconFeed = styled.img`
  width: ${(props) => props.width};
`;
