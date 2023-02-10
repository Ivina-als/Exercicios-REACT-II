import styled from "styled-components";

export const Grid = styled.section`
  position: relative;
  display: grid;
  height: 100vh;
  grid-template-columns: ${(props) => props.templateColumns};
`;

export const DivBody = styled.div``;

export const DivSection = styled.div`
  padding-top: 40px;
  position: relative;
`;

export const GridPhotos = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  &:last-child {
    justify-self: start;
  }
  gap: 30px;
`;

export const DivPhotos = styled.div`
  position: relative;
  display: flex;
  gap: 20px;
  justify-content: center;
  width: 350px;
  height: 350px;
`;
