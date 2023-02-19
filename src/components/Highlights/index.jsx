import { Avatar } from "../Avatar/avatar";
import * as S from "./S.highlights";
import hand from "../../assets/mao.jpg";
import hashtag from "../../assets/hashtag.jpg";
import circle from "../../assets/circulo.jpg";
import cap from "../../assets/cap.jpg";
import fibo from "../../assets/fibo.jpg";

const objHighlights = [
  {
    name: "Parceiros",
    img: `${hand}`,
  },
  {
    name: "Desafios",
    img: `${hashtag}`,
  },
  {
    name: "Comunidades",
    img: `${circle}`,
  },
  {
    name: "Faculdade",
    img: `${cap}`,
  },
  {
    name: "Modelo Educacional",
    img: `${fibo}`,
  },
];

export const Highlights = (props) => {
  return (
    <S.Highlights>
      {objHighlights.map((item, index) => (
        <S.HighlightsItem key={index}>
          <S.DivHighLigths {...props}>
            <Avatar src={item.img} size="small" />
          </S.DivHighLigths>
          <S.HighlightsText>{item.name}</S.HighlightsText>
        </S.HighlightsItem>
      ))}
    </S.Highlights>
  );
};
