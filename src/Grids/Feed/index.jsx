import { DivPhotos, GridPhotos, Pin, ImgFeed } from "./S.Grid";
import { request } from "../../request/request";
import { useState, useEffect, useContext } from "react";
import { Text } from "../../components/Text";
import pin from "../../assets/pin.svg";
import { InstaContext } from "../../App";

export const Feed = (props) => {
  const state = useContext(InstaContext);
  console.log(state);
  const [isLoading, setIsLoading] = useState(false); //loading.io/css/
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const makeRequest = async () => {
      try {
        setIsLoading(true);
        const responser = await request("photos");
        state.meuDispatch({ type: "add_photo", payload: responser });
      } catch (error) {
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };
    makeRequest();
  }, []);

  const handlePhoto = (imageId) => {
    state.meuDispatch({ type: "add_image_fetch", payload: imageId });
    state.meuDispatch({ type: "change_current_page", payload: "fullScreen" });
  };

  return (
    <GridPhotos>
      {isLoading && <Text>Carregando...</Text>}
      {hasError && <Text>Epa, deu ruim!</Text>}
      {state.meuState.user.photos.map((photo, index) => (
        <DivPhotos key={photo.id} onClick={() => handlePhoto(photo.id)}>
          <ImgFeed src={photo.urls.small} />

          {index <= 2 && <Pin src={pin} />}
        </DivPhotos>
      ))}
    </GridPhotos>
  );
};
