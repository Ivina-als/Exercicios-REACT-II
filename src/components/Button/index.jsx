import * as S from "./S.button";

export const Button = (props) => {
  return (
    <S.StyleButton onClick={() => props.onClick} {...props}>
      {props.children}
    </S.StyleButton>
  );
};
