import React from "react";
import styled from "styled-components";
import title from "../images/tile.jpg"

import Banner from "./Banner";

const FrameWrapper = styled.div`
  width: 20em;
  height: 12em;
  padding: 1em;
  background: #000;
  font-size: 8px;

  @media (min-width: 414px) {
    width: 30em;
    height: 20em;
  }

  @media (min-width: 768px) {
    width: 50em;
    height: 28em;
  }
  @media (min-width: 1024px) {
    width: 50em;
    height: 28em;
  }
  @media (min-width: 1440px) {
    width: 70em;
    height: 40em;
  }
`;

const Image = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url(${title});
  background-size: 100%;
  background-repeat:no-repeat;
  border: solid 2px;
`;

const Frame = () => {
  return (
    <FrameWrapper >
      <Image>
        <Banner />
      </Image>
    </FrameWrapper>
  );
};

export default Frame;