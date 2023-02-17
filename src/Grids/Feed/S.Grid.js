import styled from "styled-components";

export const Grid = styled.section`
  position: relative;
  display: grid;
  height: 100vh;
  grid-template-columns: ${(props) => props.templateColumns};
  box-sizing: border-box;
`;

export const DivBody = styled.div`
  position: relative;
  box-sizing: border-box;
`;

export const DivSection = styled.div`
  padding-top: 40px;
  position: relative;
`;

export const GridPhotos = styled.div`
  overflow-clip-margin: content-box;
  overflow: clip;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: space-around;
  gap: 20px;
  padding: 0 80px 0 80px;
`;

export const DivPhotos = styled.div`
  position: relative;
  display: flex;
  gap: 20px;
  justify-content: center;
  height: 250px;
`;
