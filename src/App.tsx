import React from "react";
import styled from "styled-components";
import Home from "./sections/Home";
import Work from "./sections/Work";
import ReadingList from "./sections/ReadingList";
import Contact from "./sections/Contact";
import "./index.css";
import SectionDivider from "./components/SectionDivider";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const App = () => {
  return (
    <AppContainer>
      <Home />
      <SectionDivider />
      <Work />
      <SectionDivider />
      <ReadingList />
      <SectionDivider />
      <Contact />
    </AppContainer>
  );
};

export default App;
