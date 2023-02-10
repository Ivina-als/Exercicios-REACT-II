import * as S from "./S.text";

export const Text = (props) => {
  return <S.StyleText {...props}>{props.children}</S.StyleText>;
};
