import * as S from "./S.IconNav";
import { Text } from "../Text";

export const IconNav = (props) => {
  return (
    <S.DivIcon>
      <S.SpanBadge {...props}>
        <Text>5</Text>
      </S.SpanBadge>
      <img src={props.children} />
    </S.DivIcon>
  );
};
