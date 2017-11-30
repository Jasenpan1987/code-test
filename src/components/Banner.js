import React from "react";
import styled from "styled-components";
import logo from "../images/logo.png";
import title from "../images/tile.jpg";

const BannerWrapper = styled.div`
  padding: 0.5em;
  height: 3em;
  width: 100%;
  position: absolute;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.65);
  
  @media (min-width: 768px) {
    height: 6em;
  }
`;

const BannerLogo = styled.img`
  height: 100%;
  float: left;
`;

const BannerTitle = styled.h1`
  float: left;
  padding: 0 1em;
  line-height: 2em;
  font-size: 2em;
  font-weight: 700;
  color: #fff;
  vertical-align: middle;
  
  @media (min-width: 768px) {
    font-size: 3.5em;
  }
`;

const Banner = () => {
  return (
    <BannerWrapper>
      <BannerLogo src={logo} />
      <BannerTitle>
        Home And Away
      </BannerTitle>
    </BannerWrapper>
  );
};

export default Banner;