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
  gap: 10px;
`;

export const BoxButtons = styled.div`
  ${defaultProps}
  height:800px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const MoreBox = styled.div`
  ${defaultProps}
  display: flex;
  gap: 10px;
  align-items: center;
  height: 150px;
`;

export const BoxNav = styled.div`
  ${defaultProps}
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const Profile = styled.div`
  width: 50px;
  border: 1px solid "white";
  border-radius: 50%;
`;
