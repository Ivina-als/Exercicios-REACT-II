import { StyleText, ImgTitle } from "./S.title";

export const TitleLogo = (props) => {
  return (
    <StyleText {...props}>
      <ImgTitle src={props.src} width={props.width} />
    </StyleText>
  );
};
