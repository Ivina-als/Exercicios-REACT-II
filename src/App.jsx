import { useState, useEffect } from "react";
import { NavBar } from "./Grids/NavBar/index";
import { Header } from "./Grids/Header";
import {
  Grid,
  DivBody,
  DivSection,
  GridPhotos,
  DivPhotos,
} from "./Grids/S.Grid";
import "./index.css";
import { Highlights } from "./components/Highlights";
import { request } from "./request/request";

function App() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const makeRequest = async () => {
      const responser = await request("photos");
      setPhotos(responser);
      console.log(responser);
    };
    makeRequest();
  }, []);
  return (
    <Grid templateColumns="20% 80%">
      <DivBody>
        <NavBar />
      </DivBody>
      <DivSection>
        <DivBody>
          <Header />
        </DivBody>
        <DivBody>
          <Highlights />
        </DivBody>
        <DivBody>
          <GridPhotos>
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
        </DivBody>
      </DivSection>
    </Grid>
  );
}

//1h:57

export default App;
