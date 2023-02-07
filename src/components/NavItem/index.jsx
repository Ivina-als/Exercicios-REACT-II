import styled from "styled-components";

const StyleNavItem = styled.div`
  color: #fff;
`;

export const NavItem = ({ text }) => {
  return <StyleNavItem>{text}</StyleNavItem>;
};
