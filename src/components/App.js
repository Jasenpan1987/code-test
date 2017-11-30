import React from "react";
import styled from "styled-components";

import Frame from "./Frame";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: #383c42;
  padding: 3rem;
  font-size: 6px;

  @media (min-width: 414px) {
    font-size: 8px;
  }

  @media (min-width: 768px) {
    font-size: 10px;
  }
  
  @media (min-width: 1024px) {
    font-size: 14px;
  }
`;

const App = () => {
  return (
    <Wrapper>
      <Frame />
    </Wrapper>
  )
}

export default App;
