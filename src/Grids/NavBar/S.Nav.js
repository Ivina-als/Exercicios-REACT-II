import styled, { css } from "styled-components";

const defaultProps = css`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
`;

export const NavBarWrapper = styled.aside`
  overflow-clip-margin: content-box;
  overflow: clip;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #000;
  width: calc(20% - 60px);
  position: fixed;
  height: 100%;
  padding: 50px 30px;
`;

export const Box = styled.div`
  ${defaultProps}
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const MoreBox = styled.div`
  ${defaultProps}
  display: flex;
  align-items: end;
  height: 100px;
`;
