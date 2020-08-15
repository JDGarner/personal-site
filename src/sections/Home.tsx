import React from "react";
import styled from "styled-components";
import { highlightColorPink, textLightColor } from "../styling/palette";
import "../components/background/background.scss";
import Centered from "../components/layout/Centered";
import { ArrowIosDownwardOutline } from "@styled-icons/evaicons-outline/ArrowIosDownwardOutline";

interface Props {}

const SectionContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IntroContainer = styled(Centered)`
  display: flex;
  flex-direction: column;
  z-index: 1;
`;

const StarsContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
`;

const IntroHeader = styled.h1`
  color: ${textLightColor};
  font-size: 3.5em;
  line-height: 1.2em;
  text-align: center;
`;

const Highlight = styled.span`
  color: ${highlightColorPink};
  font-weight: 600;
`;

const Home: React.FC = ({}: Props) => {
  return (
    <SectionContainer>
      <StarsContainer>
        <div className="stars-small-white"></div>
        <div className="stars-medium-white"></div>
        <div className="stars-big-white"></div>
        <div className="stars-small-yellow1"></div>
        <div className="stars-medium-yellow1"></div>
        <div className="stars-big-yellow1"></div>
        <div className="stars-small-yellow2"></div>
        <div className="stars-medium-yellow2"></div>
        <div className="stars-big-yellow2"></div>
      </StarsContainer>
      <IntroContainer>
        <IntroHeader>
          Hello, I'm <Highlight>Jamie Garner</Highlight>
          <br />
          I'm a full stack developer
        </IntroHeader>
        {/* <ArrowDownIcon size="58" color={highlightColorPink} /> */}
        <ArrowIosDownwardOutline size="72" color={highlightColorPink} />
      </IntroContainer>
    </SectionContainer>
  );
};

export default Home;
