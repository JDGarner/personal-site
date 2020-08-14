import React from "react";
import styled from "styled-components";
import { highlightColorPink, textLightColor } from "../styling/palette";
import "../components/background/background.scss";
import Centered from "../components/layout/Centered";

interface Props {}

const SectionContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StarsContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;

const IntroHeader = styled.h1`
  color: ${textLightColor};
  font-size: 3.5em;
  line-height: 1.2em;
  text-align: center;
`;

const Highlight = styled.span`
  color: ${highlightColorPink};
`;

const Home: React.FC = ({}: Props) => {
  return (
    <SectionContainer>
      <StarsContainer>
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
      </StarsContainer>
      <IntroHeader>
        Hello, I'm <Highlight>Jamie Garner</Highlight>
        <br />
        I'm a full stack developer
      </IntroHeader>
    </SectionContainer>
  );
};

export default Home;
