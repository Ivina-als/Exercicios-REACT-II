import styled, { css } from "styled-components";

export const textCss = css`
  color: ${(props) => props.color || "#fff"};
  font-weight: ${(props) => (props.bold ? 900 : "")};
  ${(props) => (props.size === "small" ? "font-size: 12px" : "")}
`;

export const StyleText = styled.div`
  ${textCss};
`;

export const TextLink = styled.a`
  ${textCss};
  text-decoration: none;
  cursor: pointer;
  color: ${(props) => props.color};
  &:hover {
    text-decoration: underline;
  }
`;
