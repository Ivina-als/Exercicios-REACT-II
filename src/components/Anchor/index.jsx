import * as S from "./S.Anchor";

export const Anchor = (props) => {
  return (
    <S.StyleAnchor {...props} href={props.href} target="_blank">
      {props.children}
    </S.StyleAnchor>
  );
};
