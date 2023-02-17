import styled from "styled-components";

const defaultSize = {
  width: "150px",
  height: "150px",
};

const smallSize = {
  width: "90px",
  height: "90px",
};

export const Wrapper = styled.div((props) => {
  return {
    justifyContent: "center",
    overflow: "hidden",
    borderRadius: "50%",
    ...(props.size === "small" ? smallSize : defaultSize),
  };
});

export const ImgHighlight = styled.img`
  width: 100%;
  height: 100%;
`;
