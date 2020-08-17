import React from "react";
import styled from "styled-components";
import {
  highlightColorPink,
  textColorLight,
  backgroundColorDark,
} from "../styling/palette";
import Centered from "../components/layout/Centered";
import { ArrowIosDownwardOutline } from "@styled-icons/evaicons-outline/ArrowIosDownwardOutline";
import Button from "../components/Button";
import { CenteredSection } from "../components/layout/Section";
import StarBackground from "../components/background/StarBackground";

interface Props {}

const IntroContainer = styled(Centered)`
  display: flex;
  flex-direction: column;
  z-index: 1;
`;

const IntroHeader = styled.h1`
  color: ${textColorLight};
  font-size: 3.5em;
  line-height: 1.2em;
  text-align: center;
  font-weight: 300;
`;

const Highlight = styled.span`
  color: ${highlightColorPink};
  font-weight: 500;
`;

const Home: React.FC = ({}: Props) => {
  const goDown = () => {};

  return (
    <CenteredSection backgroundColor={backgroundColorDark}>
      <StarBackground />
      <IntroContainer>
        <IntroHeader>
          Hello, I'm <Highlight>Jamie Garner</Highlight>
          <br />
          I'm a full stack developer
        </IntroHeader>
        <Button onClick={goDown}>
          <ArrowIosDownwardOutline size="72" color={highlightColorPink} />
        </Button>
      </IntroContainer>
    </CenteredSection>
  );
};

export default Home;
