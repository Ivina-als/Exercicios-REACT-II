import styled, { css } from "styled-components";
import { Text } from "../Text";

const HighlightsCursor = css`
  &:hover {
    cursor: pointer;
  }
`;

export const Highlights = styled.div`
  overflow-clip-margin: content-box;
  overflow: clip;
  width: 80%;
  display: flex;
  justify-content: center;
  margin: 60px 0;
  gap: 30px;
`;

export const HighlightsItem = styled.div`
  ${HighlightsCursor}
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

export const HighlightsText = styled(Text)`
  ${HighlightsCursor}
  margin-top: 16px;
  width: 90px;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  white-space: nowrap;
`;

//cor da ada #a4f54f
