import React from "react";
import styled from "styled-components";
import Home from "./sections/Home";
import Work from "./sections/Work";
import ReadingList from "./sections/ReadingList";
import Contact from "./sections/Contact";
import "./index.css";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const App = () => {
  return (
    <AppContainer>
      <Home />
      <Work />
      <ReadingList />
      <Contact />
    </AppContainer>
  );
};

export default App;
