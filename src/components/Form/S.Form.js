import styled from "styled-components";

export const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  color: ${(props) => props.color};
`;

export const InputDefault = styled.input`
  box-sizing: border-box;
  background-color: ${(props) => props.background || "#131313"};
  color: #d7d7d7;
  width: 100%;
  border: 1px solid grey;
  border-radius: 5px;
  padding: 5px;
  margin: 5px 0 5px 0;
  &:hover {
    border: 1px solid #2563eb7d;
  }
`;
