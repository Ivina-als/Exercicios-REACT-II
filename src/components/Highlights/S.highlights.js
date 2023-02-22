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
  margin: 60px 60px 60px 20px;
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

export const DivHighLigths = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${(props) => (props.border ? "1px solid #80808038" : "")};
  background-color: #131313;
  overflow: hidden;
  border-radius: 50%;
  width: 98px;
  height: 98px;
`;
