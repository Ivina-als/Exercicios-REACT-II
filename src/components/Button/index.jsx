import * as S from "./S.button";

export const Button = (props) => {
  return <S.StyleButton {...props}>{props.children}</S.StyleButton>;
};
