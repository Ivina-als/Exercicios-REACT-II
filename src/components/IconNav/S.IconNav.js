import styled from "styled-components";

export const DivIcon = styled.div`
  border-radius: 50px;
  width: 25px;
  position: relative;
  padding: 5px 10px 0 0;
  display: inline-block;
  img {
    width: 100%;
  }
`;

export const SpanBadge = styled.span`
  display: ${(props) => props.badge};
  position: absolute;
  right: 4px;
  top: 0px;
  background: red;
  text-align: center;
  border-radius: 50px 50px 50px 50px;
  border: 2px solid #000000;
  color: white;
  padding: 3px 6px;
  font-size: 10px;
`;
