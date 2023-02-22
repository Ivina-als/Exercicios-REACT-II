import { useContext } from "react";
import { InstaContext } from "../../App";
import { Button } from "../../components/Button";
import * as S from "../S.stylesPages";

export const Photo = () => {
  const state = useContext(InstaContext);
  return (
    <S.DefaultDiv>
      <Button
        onClick={() =>
          state.meuDispatch({
            type: "change_current_page",
            payload: "home",
          })
        }
        background="#000000"
        colorText="white"
        style={{
          position: "absolute",
          left: "150px",
          top: "10px",
          zIndex: "999",
        }}
      >
        Voltar
      </Button>

      <S.ImgDefault src={state.meuState.user.image.urls.regular} />
    </S.DefaultDiv>
  );
};
