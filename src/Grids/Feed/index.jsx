import { DivPhotos, GridPhotos } from "./S.Grid";
import { request } from "../../request/request";
import { useState, useEffect } from "react";
import { Text } from "../../components/Text";
import * as S from "../../Pages/Home/S.home";
import { Button } from "../../components/Button";

export const Feed = (props) => {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false); //loading.io/css/
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const makeRequest = async () => {
      try {
        setIsLoading(true);
        const responser = await request("photos");
        setPhotos(responser);
      } catch (error) {
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };
    makeRequest();
  }, []);

  return (
    <GridPhotos>
      {isLoading && <Text>Carregando...</Text>}
      {hasError && <Text>Epa, deu ruim!</Text>}
      {photos.map((photo) => (
        <DivPhotos key={photo.id}>
          <img
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            src={photo.urls.small}
          />
        </DivPhotos>
      ))}
    </GridPhotos>
  );
};
