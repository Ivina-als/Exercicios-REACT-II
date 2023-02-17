import { ImgHighlight, Wrapper } from "./S.avatar";

export const Avatar = (props) => {
  return (
    <Wrapper {...props}>
      <ImgHighlight src={props.src} />
    </Wrapper>
  );
};
